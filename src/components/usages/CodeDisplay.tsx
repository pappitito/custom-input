import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import { useEffect } from 'react';

const CodeDisplay: React.FC<{ code: string }> = ({ code }) => {
    useEffect(() => {
      hljs.highlightAll(); // Highlight all code elements after rendering
    }, []);
  
    return (
      <pre>
        <code className="language-tsx">{code}</code>
      </pre>
    );
  };

  export default CodeDisplay;