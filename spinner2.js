const spinPositions = "| / - \\ |\n";
let delayTimer = 0;

for(let spin of spinPositions) {
  setTimeout(() => {
    process.stdout.write('\r' + spin + "   ");
  }, delayTimer += 200)
}

//setTimeout(() => {
//  process.stdout.write('\r|    ');
//}, 100);
//
//setTimeout(() => {
//  process.stdout.write('\r/    ');
//}, 300);
//
//setTimeout(() => {
//  process.stdout.write('\r-    ');
//}, 500);
//
//setTimeout(() => {
//  process.stdout.write('\r\\   ');
//}, 700);
//
//setTimeout(() => {
//  process.stdout.write('\r|    ');
//}, 900);
//
//setTimeout(() => {
//  process.stdout.write('\r/    ');
//}, 1100);
//
//setTimeout(() => {
//  process.stdout.write('\r-    ');
//}, 1300);
//
//setTimeout(() => {
//  process.stdout.write('\r\\   ');
//}, 1700);
//
//setTimeout(() => {
//  process.stdout.write('\r|    ');
//}, 1900);