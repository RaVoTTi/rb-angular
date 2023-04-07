module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start:cus:prod",
      url: ["http://localhost:4000"],
      numberOfRuns: 3,
      chromePath: "/usr/bin/chromium",
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.50 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.8 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
