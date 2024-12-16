export const formatTerminalText = (text: string): string => {
  return text.split('\n').map(line => {
    if (line.includes('ERROR:')) {
      return `<span class="text-red-500 font-bold">${line}</span>`;
    }
    if (line.includes('WARNING:')) {
      return `<span class="text-yellow-500 font-bold">${line}</span>`;
    }
    if (line.includes('Just Kidding!')) {
      return `<span class="text-emerald-400 font-bold text-xl">${line}</span>`;
    }
    return line;
  }).join('\n');
};