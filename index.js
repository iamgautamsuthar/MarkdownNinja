const marktohtml = (markdown) => {
    // Start with the original markdown string
    let html = markdown;

    // Convert headers (from H1 to H3)
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Convert bold and italics
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>'); // Non-greedy match
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>'); // Non-greedy match

    // Convert links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

    // Convert unordered lists
    html = html.replace(/^\s*[-+*]\s+(.*)/gim, '<ul><li>$1</li></ul>');

    // Convert ordered lists
    html = html.replace(/^\d+\.\s+(.*)/gim, '<ol><li>$1</li></ol>');

    // Replace line breaks with <br>
    html = html.replace(/\n/gim, '<br><hr>');

    return html.trim();
};

export default marktohtml;
