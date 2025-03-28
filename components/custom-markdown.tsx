import type React from "react";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

// Custom components for markdown elements
const MarkdownHeading1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-3xl font-serif font-medium text-zinc-900 mb-6 mt-8">
    {children}
  </h1>
);

const MarkdownHeading2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-serif font-medium text-zinc-900 mb-4 mt-8 pb-2 border-b border-zinc-200">
    {children}
  </h2>
);

const MarkdownHeading3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-medium text-zinc-900 mb-3 mt-6">{children}</h3>
);

const MarkdownParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-zinc-600 mb-4 leading-relaxed">{children}</p>
);

const MarkdownLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link
        href={href}
        className="text-purple-700 hover:text-purple-800 font-medium"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-700 hover:text-purple-800 font-medium"
    >
      {children}
    </a>
  );
};

const MarkdownBlockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-purple-700 bg-purple-50 pl-4 py-3 pr-3 my-6 text-zinc-700 rounded-r-md">
    {children}
  </blockquote>
);

const MarkdownCode = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-zinc-100 text-purple-700 px-1.5 py-0.5 rounded text-sm font-mono">
    {children}
  </code>
);

const MarkdownPre = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-md overflow-x-auto my-6 font-mono text-sm">
    {children}
  </pre>
);

const MarkdownList = ({
  children,
  ordered,
}: {
  children: React.ReactNode;
  ordered?: boolean;
}) => {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <ListTag
      className={`${ordered ? "list-decimal" : "list-disc"} pl-6 mb-4 text-zinc-600 space-y-2`}
    >
      {children}
    </ListTag>
  );
};

const MarkdownListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="leading-relaxed">{children}</li>
);

const MarkdownTable = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full border-collapse">{children}</table>
  </div>
);

const MarkdownTableHead = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-zinc-100 border-b border-zinc-200">{children}</thead>
);

const MarkdownTableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
);

const MarkdownTableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-b border-zinc-200">{children}</tr>
);

const MarkdownTableCell = ({
  children,
  isHeader,
}: {
  children: React.ReactNode;
  isHeader?: boolean;
}) => {
  if (isHeader) {
    return (
      <th className="px-4 py-3 text-left font-medium text-zinc-900">
        {children}
      </th>
    );
  }
  return <td className="px-4 py-3 text-zinc-600">{children}</td>;
};

const MarkdownHorizontalRule = () => (
  <hr className="my-8 border-t border-zinc-200" />
);

// Options for markdown-to-jsx
export const markdownOptions = {
  overrides: {
    h1: MarkdownHeading1,
    h2: MarkdownHeading2,
    h3: MarkdownHeading3,
    p: MarkdownParagraph,
    a: MarkdownLink,
    blockquote: MarkdownBlockquote,
    code: MarkdownCode,
    pre: MarkdownPre,
    ul: {
      component: MarkdownList,
      props: { ordered: false },
    },
    ol: {
      component: MarkdownList,
      props: { ordered: true },
    },
    li: MarkdownListItem,
    table: MarkdownTable,
    thead: MarkdownTableHead,
    tbody: MarkdownTableBody,
    tr: MarkdownTableRow,
    th: {
      component: MarkdownTableCell,
      props: { isHeader: true },
    },
    td: MarkdownTableCell,
    hr: MarkdownHorizontalRule,
  },
};

export function CustomMarkdown({ content }: { content: string }) {
  return <Markdown options={markdownOptions}>{content}</Markdown>;
}
