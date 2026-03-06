const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "..", "public", "documents");
const outputPath = path.join(outputDir, "admission-form.pdf");
const logoPath = path.join(__dirname, "..", "public", "logo", "logo.png");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 30, bottom: 30, left: 45, right: 45 },
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const pageWidth = doc.page.width;
const leftMargin = 45;
const rightEdge = pageWidth - 45;
const contentWidth = rightEdge - leftMargin;

// Colors
const primaryRed = "#B22222";
const primaryBlue = "#1A3C8A";
const lineColor = "#2E5FA1";
const lightGray = "#666666";

// Spacing constants — compact to fit single page
const fieldSpacing = 22;
const sectionGap = 8;

// ── Header Section ──
doc.moveTo(leftMargin, 28).lineTo(rightEdge, 28).lineWidth(2).strokeColor(primaryRed).stroke();

doc.fontSize(20).font("Helvetica-Bold").fillColor(primaryRed);
doc.text("STANDARD SCHOOLS, ILORIN", leftMargin, 36, {
  align: "center",
  width: contentWidth,
});

doc.moveTo(leftMargin, 62).lineTo(rightEdge, 62).lineWidth(1.5).strokeColor(primaryBlue).stroke();

// Logo + Details row
const logoSize = 70;
const logoX = leftMargin + 5;
const detailsStartY = 70;

if (fs.existsSync(logoPath)) {
  doc.image(logoPath, logoX, detailsStartY, { width: logoSize, height: logoSize });
}

const detailsX = logoX + logoSize + 12;
const detailsWidth = contentWidth - logoSize - 20 - 95;

doc.fontSize(8).font("Helvetica-Bold").fillColor(primaryBlue);
doc.text("MOTTO: KNOWLEDGE IS POWER", detailsX, detailsStartY + 2, { width: detailsWidth, align: "center" });

doc.fontSize(8.5).font("Helvetica-Bold").fillColor(primaryRed);
doc.text("TODDLER, NURSERY AND PRIMARY", detailsX, detailsStartY + 14, { width: detailsWidth, align: "center" });

doc.fontSize(7).font("Helvetica").fillColor("#333333");
doc.text("Address: Plot 17, Block TPS 235, Mandate Area, Ilorin, Kwara State", detailsX, detailsStartY + 27, { width: detailsWidth, align: "center" });
doc.text("Tel: 09015788920, 08023429407, 08109294152", detailsX, detailsStartY + 38, { width: detailsWidth, align: "center" });
doc.text("Email: standardinternationalschool@gmail.com", detailsX, detailsStartY + 49, { width: detailsWidth, align: "center" });

// Passport photograph box
const passportW = 80;
const passportH = 60;
const passportX = rightEdge - passportW;
const passportY = detailsStartY;

doc.rect(passportX, passportY, passportW, passportH).lineWidth(1).strokeColor(primaryRed).stroke();

doc.fontSize(7.5).font("Helvetica-Oblique").fillColor(lightGray);
doc.text("Affix your", passportX, passportY + 16, { width: passportW, align: "center" });
doc.text("Passport here", passportX, passportY + 30, { width: passportW, align: "center" });

// ── ADMISSION FORM Title ──
let y = detailsStartY + logoSize + 10;

doc.fontSize(18).font("Helvetica-Bold").fillColor(primaryRed);
doc.text("ADMISSION FORM", leftMargin, y, { align: "center", width: contentWidth });

y += 28;
doc.moveTo(leftMargin, y).lineTo(rightEdge, y).lineWidth(1).strokeColor(lineColor).stroke();
y += sectionGap;

// ── Helpers ──
function drawField(label, startX, fieldY, fieldWidth) {
  doc.fontSize(9).font("Helvetica-Bold").fillColor("#222222");
  const labelWidth = doc.widthOfString(label);
  doc.text(label, startX, fieldY);

  const dotsStart = startX + labelWidth + 3;
  const dotsEnd = startX + fieldWidth;
  doc.moveTo(dotsStart, fieldY + 11).lineTo(dotsEnd, fieldY + 11)
    .lineWidth(0.5).dash(2, { space: 2 }).strokeColor("#AAAAAA").stroke();
  doc.undash();
}

function drawFieldRow(fields, fieldY) {
  const fieldW = contentWidth / fields.length;
  fields.forEach((label, i) => {
    drawField(label, leftMargin + i * fieldW, fieldY, fieldW - 8);
  });
}

function sectionTitle(title, sectionY) {
  doc.fontSize(11).font("Helvetica-Bold").fillColor(primaryBlue);
  doc.text(title, leftMargin, sectionY);
  return sectionY + 18;
}

// ── STUDENT INFORMATION ──
y = sectionTitle("STUDENT INFORMATION", y);

drawFieldRow(["Surname:", "First Name:", "Other Name:"], y);
y += fieldSpacing;

drawFieldRow(["Date of Birth:", "Place of Birth:", "Nationality:"], y);
y += fieldSpacing;

const quarterW = contentWidth / 4;
drawField("State of Origin:", leftMargin, y, quarterW - 6);
drawField("L.G.A:", leftMargin + quarterW, y, quarterW - 6);
drawField("Sex:", leftMargin + quarterW * 2, y, quarterW - 6);
drawField("Religion:", leftMargin + quarterW * 3, y, quarterW - 6);
y += fieldSpacing;

drawField("Residential Address:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Contact Address:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Last School Attended with Date and Address:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Reason for leaving your Present School:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Present Class:", leftMargin, y, contentWidth);
y += fieldSpacing + sectionGap;

// Divider
doc.moveTo(leftMargin, y - 4).lineTo(rightEdge, y - 4).lineWidth(0.8).strokeColor(lineColor).stroke();

// ── PARENT'S / GUARDIAN'S INFORMATION ──
y = sectionTitle("PARENT'S / GUARDIAN'S INFORMATION", y);

drawFieldRow(["Surname:", "First Name:", "Other Name:"], y);
y += fieldSpacing;

drawField("Father's Name:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Mother's Name:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Occupation:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Office Address:", leftMargin, y, contentWidth);
y += fieldSpacing;

const halfW = contentWidth / 2;
drawField("Phone No:", leftMargin, y, halfW - 8);
drawField("Email:", leftMargin + halfW, y, halfW - 8);
y += fieldSpacing + sectionGap;

// Divider
doc.moveTo(leftMargin, y - 4).lineTo(rightEdge, y - 4).lineWidth(0.8).strokeColor(lineColor).stroke();

// ── FOR OFFICIAL USE ONLY ──
y = sectionTitle("FOR OFFICIAL USE ONLY", y);

drawField("Application Granted / No:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Name of the Officer:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Rank:", leftMargin, y, contentWidth);
y += fieldSpacing;

drawField("Signature / Date:", leftMargin, y, contentWidth);
y += fieldSpacing + 6;

// ── Submission Instructions ──
doc.moveTo(leftMargin, y).lineTo(rightEdge, y).lineWidth(0.5).strokeColor(lineColor).stroke();
y += 8;

doc.fontSize(7.5).font("Helvetica-Bold").fillColor(primaryBlue);
doc.text("HOW TO SUBMIT:", leftMargin, y);
y += 11;
doc.fontSize(7).font("Helvetica").fillColor("#333333");
doc.text("1. In Person — Bring the completed form to our school office at Plot 17, Block TPS 235, Mandate Area, Ilorin.", leftMargin, y, { width: contentWidth });
y += 10;
doc.text("2. Via WhatsApp / Email — Scan or photograph the filled form and send to: 08109294152 (WhatsApp) or standardinternationalschool@gmail.com", leftMargin, y, { width: contentWidth });
y += 14;

// ── Footer ──
doc.moveTo(leftMargin, y).lineTo(rightEdge, y).lineWidth(2).strokeColor(primaryBlue).stroke();

doc.fontSize(6.5).font("Helvetica-Oblique").fillColor(lightGray);
doc.text("Standard Schools, Ilorin — Knowledge is Power", leftMargin, y + 5, {
  align: "center",
  width: contentWidth,
});

doc.end();

stream.on("finish", () => {
  console.log(`Admission form PDF generated at: ${outputPath}`);
});
