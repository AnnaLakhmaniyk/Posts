export default function Heading({ teg, text }) {
  const Tag = teg || "h1"

  return <Tag>{text}</Tag>
}
