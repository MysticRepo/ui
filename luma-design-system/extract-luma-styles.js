#!/usr/bin/env node

/**
 * Luma Style Guide Extraction Script
 * Extracts all design tokens, components, and styles from luma.com/style-guide
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CONFIG = {
  baseUrl: 'https://luma.com/style-guide',
  outputDir: './extracted-data',
  componentPages: [
    'button',
    'input',
    'text',
    'color',
    'controls',
    'collapse',
    'overlay',
    'icons',
    'events',
    'timeline',
    'tint',
    'editor',
    'banner',
    'social',
    'datetime',
    'chat',
    'weather'
  ]
};

// Ensure output directory exists
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

/**
 * Extract computed styles from all elements on a page
 */
async function extractPageStyles(page, url) {
  console.log(`\n📄 Extracting: ${url}`);

  await page.goto(url, {
    waitUntil: 'networkidle2',
    timeout: 60000
  });

  // Wait for any dynamic content
  await page.waitForTimeout(2000);

  const extractedData = await page.evaluate(() => {
    const data = {
      url: window.location.href,
      title: document.title,
      colors: {},
      typography: [],
      spacing: [],
      components: [],
      animations: [],
      shadows: [],
      borders: [],
      cssVariables: {},
      rawStyles: []
    };

    // Extract CSS variables from :root
    const rootStyles = getComputedStyle(document.documentElement);
    const allProps = Array.from(rootStyles);

    allProps.forEach(prop => {
      if (prop.startsWith('--')) {
        const value = rootStyles.getPropertyValue(prop).trim();
        if (value) {
          data.cssVariables[prop] = value;
        }
      }
    });

    // Extract from all elements
    const allElements = document.querySelectorAll('*');
    const seenColors = new Set();
    const seenTypography = new Set();
    const seenSpacing = new Set();

    allElements.forEach((el, index) => {
      const computed = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();

      // Skip if element is not visible
      if (rect.width === 0 || rect.height === 0) return;

      const elementData = {
        tag: el.tagName,
        classes: Array.from(el.classList),
        id: el.id || null,
        index
      };

      // Extract colors
      ['color', 'backgroundColor', 'borderColor', 'borderTopColor', 'borderRightColor',
       'borderBottomColor', 'borderLeftColor', 'fill', 'stroke'].forEach(prop => {
        const value = computed[prop];
        if (value && value !== 'rgba(0, 0, 0, 0)' && value !== 'transparent') {
          const key = `${prop}:${value}`;
          if (!seenColors.has(key)) {
            seenColors.add(key);
            if (!data.colors[value]) {
              data.colors[value] = [];
            }
            data.colors[value].push({
              property: prop,
              element: elementData.tag,
              classes: elementData.classes
            });
          }
        }
      });

      // Extract typography
      const fontData = {
        element: elementData.tag,
        classes: elementData.classes,
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        textTransform: computed.textTransform,
        textDecoration: computed.textDecoration
      };

      const typographyKey = JSON.stringify(fontData);
      if (!seenTypography.has(typographyKey) && parseFloat(computed.fontSize) > 0) {
        seenTypography.add(typographyKey);
        data.typography.push(fontData);
      }

      // Extract spacing
      ['marginTop', 'marginRight', 'marginBottom', 'marginLeft',
       'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
       'gap', 'rowGap', 'columnGap'].forEach(prop => {
        const value = computed[prop];
        if (value && value !== '0px' && value !== 'auto') {
          const spacingKey = `${prop}:${value}`;
          if (!seenSpacing.has(spacingKey)) {
            seenSpacing.add(spacingKey);
            data.spacing.push({
              property: prop,
              value: value,
              element: elementData.tag,
              classes: elementData.classes
            });
          }
        }
      });

      // Extract box shadows
      if (computed.boxShadow && computed.boxShadow !== 'none') {
        data.shadows.push({
          value: computed.boxShadow,
          element: elementData.tag,
          classes: elementData.classes
        });
      }

      // Extract border radius
      if (computed.borderRadius && computed.borderRadius !== '0px') {
        data.borders.push({
          borderRadius: computed.borderRadius,
          element: elementData.tag,
          classes: elementData.classes
        });
      }

      // Extract animations/transitions
      if (computed.transition && computed.transition !== 'all 0s ease 0s') {
        data.animations.push({
          transition: computed.transition,
          element: elementData.tag,
          classes: elementData.classes
        });
      }

      if (computed.animationName && computed.animationName !== 'none') {
        data.animations.push({
          animationName: computed.animationName,
          animationDuration: computed.animationDuration,
          animationTimingFunction: computed.animationTimingFunction,
          element: elementData.tag,
          classes: elementData.classes
        });
      }

      // Identify potential components
      const classList = Array.from(el.classList).join(' ').toLowerCase();
      const componentKeywords = [
        'button', 'btn', 'input', 'field', 'card', 'modal', 'dialog',
        'dropdown', 'select', 'checkbox', 'radio', 'switch', 'toggle',
        'slider', 'tab', 'accordion', 'tooltip', 'popover', 'alert',
        'badge', 'avatar', 'chip', 'pill'
      ];

      const isComponent = componentKeywords.some(keyword =>
        classList.includes(keyword) ||
        el.tagName.toLowerCase() === keyword ||
        el.getAttribute('role') === keyword
      );

      if (isComponent) {
        data.components.push({
          type: el.tagName,
          classes: Array.from(el.classList),
          id: el.id,
          html: el.outerHTML.substring(0, 1000), // First 1000 chars
          styles: {
            display: computed.display,
            position: computed.position,
            width: computed.width,
            height: computed.height,
            padding: computed.padding,
            margin: computed.margin,
            border: computed.border,
            borderRadius: computed.borderRadius,
            backgroundColor: computed.backgroundColor,
            color: computed.color,
            fontSize: computed.fontSize,
            fontWeight: computed.fontWeight,
            boxShadow: computed.boxShadow,
            transition: computed.transition,
            transform: computed.transform,
            cursor: computed.cursor
          },
          dimensions: {
            width: rect.width,
            height: rect.height,
            top: rect.top,
            left: rect.left
          },
          attributes: Object.fromEntries(
            Array.from(el.attributes).map(attr => [attr.name, attr.value])
          )
        });
      }
    });

    // Extract all stylesheet rules
    try {
      Array.from(document.styleSheets).forEach((sheet, sheetIndex) => {
        try {
          const rules = Array.from(sheet.cssRules || []);
          rules.forEach((rule, ruleIndex) => {
            if (rule.style && rule.cssText) {
              data.rawStyles.push({
                sheet: sheetIndex,
                rule: ruleIndex,
                selector: rule.selectorText || 'unknown',
                cssText: rule.cssText
              });
            }
          });
        } catch (e) {
          // CORS or access issues with external stylesheets
          console.warn(`Could not access stylesheet ${sheetIndex}:`, e.message);
        }
      });
    } catch (e) {
      console.error('Error extracting stylesheets:', e);
    }

    return data;
  });

  console.log(`✅ Extracted:`);
  console.log(`   - ${Object.keys(extractedData.colors).length} unique colors`);
  console.log(`   - ${extractedData.typography.length} typography styles`);
  console.log(`   - ${extractedData.spacing.length} spacing values`);
  console.log(`   - ${extractedData.components.length} components`);
  console.log(`   - ${Object.keys(extractedData.cssVariables).length} CSS variables`);
  console.log(`   - ${extractedData.rawStyles.length} CSS rules`);

  return extractedData;
}

/**
 * Take screenshots of components
 */
async function captureScreenshots(page, url, pageName) {
  console.log(`\n📸 Capturing screenshots: ${pageName}`);

  const screenshotDir = path.join(CONFIG.outputDir, 'screenshots', pageName);
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  await page.waitForTimeout(1000);

  // Full page screenshot
  await page.screenshot({
    path: path.join(screenshotDir, 'full-page.png'),
    fullPage: true
  });

  // Screenshot individual components
  const componentElements = await page.$$('[class*="button"], [class*="input"], [class*="card"]');

  for (let i = 0; i < Math.min(componentElements.length, 20); i++) {
    try {
      const element = componentElements[i];
      const box = await element.boundingBox();

      if (box && box.width > 0 && box.height > 0) {
        await element.screenshot({
          path: path.join(screenshotDir, `component-${i}.png`)
        });
      }
    } catch (e) {
      // Element might not be screenshottable
    }
  }

  console.log(`✅ Screenshots saved to ${screenshotDir}`);
}

/**
 * Main extraction function
 */
async function extractLumaStyleGuide() {
  console.log('🚀 Starting Luma Style Guide Extraction\n');
  console.log('=' .repeat(80));

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // Set user agent to avoid bot detection
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const allData = {
    extractedAt: new Date().toISOString(),
    baseUrl: CONFIG.baseUrl,
    pages: {}
  };

  try {
    // Extract main style guide page
    const mainData = await extractPageStyles(page, CONFIG.baseUrl);
    allData.pages['index'] = mainData;
    await captureScreenshots(page, CONFIG.baseUrl, 'index');

    // Extract each component page
    for (const componentPage of CONFIG.componentPages) {
      try {
        const url = `${CONFIG.baseUrl}/${componentPage}`;
        const pageData = await extractPageStyles(page, url);
        allData.pages[componentPage] = pageData;
        await captureScreenshots(page, url, componentPage);

        // Be nice to the server
        await page.waitForTimeout(1000);
      } catch (error) {
        console.error(`❌ Error extracting ${componentPage}:`, error.message);
      }
    }

    // Save all extracted data
    const outputFile = path.join(CONFIG.outputDir, 'luma-complete-extraction.json');
    fs.writeFileSync(outputFile, JSON.stringify(allData, null, 2));

    console.log('\n' + '='.repeat(80));
    console.log('✅ EXTRACTION COMPLETE');
    console.log('='.repeat(80));
    console.log(`\nData saved to: ${outputFile}`);
    console.log(`Screenshots saved to: ${path.join(CONFIG.outputDir, 'screenshots')}`);

    // Generate summary
    const summary = {
      totalPages: Object.keys(allData.pages).length,
      totalColors: new Set(
        Object.keys(allData.pages).flatMap(page =>
          Object.keys(allData.pages[page].colors || {})
        )
      ).size,
      totalComponents: Object.keys(allData.pages).reduce((sum, page) =>
        sum + (allData.pages[page].components?.length || 0), 0
      ),
      totalCSSVariables: new Set(
        Object.keys(allData.pages).flatMap(page =>
          Object.keys(allData.pages[page].cssVariables || {})
        )
      ).size
    };

    console.log('\n📊 Summary:');
    console.log(`   - Pages extracted: ${summary.totalPages}`);
    console.log(`   - Unique colors: ${summary.totalColors}`);
    console.log(`   - Total components: ${summary.totalComponents}`);
    console.log(`   - CSS variables: ${summary.totalCSSVariables}`);

    const summaryFile = path.join(CONFIG.outputDir, 'summary.json');
    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));

  } catch (error) {
    console.error('❌ Fatal error during extraction:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run extraction
extractLumaStyleGuide()
  .then(() => {
    console.log('\n✅ Extraction script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Extraction script failed:', error);
    process.exit(1);
  });

export default extractLumaStyleGuide;
