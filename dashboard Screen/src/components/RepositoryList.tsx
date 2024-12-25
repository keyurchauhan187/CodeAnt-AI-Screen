import React from 'react';

interface Repository {
  name: string;
  visibility: "Public" | "Private";
  language: string;
  size: string;
  updatedAt: string;
}

const repositories: Repository[] = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago"
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago"
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago"
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago"
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago"
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago"
  },
  {
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago"
  }
];

export default function RepositoryList() {
  return (
    <>
      {repositories.map((repo) => (
        <div 
          key={repo.name} 
          className="p-4 hover:bg-gray-50"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{repo.name}</h3>
                <span 
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    repo.visibility === "Public" 
                      ? "bg-gray-100 text-gray-700" 
                      : "border border-gray-300 text-gray-600"
                  }`}
                >
                  {repo.visibility}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  {repo.language}
                </div>
                <div>{repo.size}</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Updated {repo.updatedAt}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}