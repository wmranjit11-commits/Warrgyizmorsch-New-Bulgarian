const SafeHtml = ({ html, as: Tag = "div", className }) => {
  if (!html) return null;
  const containsHTML = /<\/?[a-z][\s\S]*>/i.test(html);
  return containsHTML ? (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <Tag className={className}>{html}</Tag>
  );
};

export default SafeHtml;
