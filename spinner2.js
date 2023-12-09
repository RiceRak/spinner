const sentence = "|/-\|/-\|"

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${sentence[i]}   `);
  }, 175 * i);
}