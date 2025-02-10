# GitHub Repo Scanner

GitHub Repo Scanner is a tool designed to scan GitHub repositories for credentials and other sensitive information. It provides a user-friendly interface to configure and run scans on both enterprise and public GitHub repositories.

## Features

<img width="786" alt="Screenshot 2025-02-10 at 12 39 43 PM" src="https://github.com/user-attachments/assets/df2568c7-aec2-405a-9b41-3bbaf3289b64" />




- Save GitHub Enterprise API Token securely
- Choose between Enterprise and Other scan types
- Configure scan parameters through an intuitive UI
- Run scans with customizable command-line arguments
- View scan results directly in the application

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- Python 3.x (for running the backend scanning scripts)

## Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/github-repo-scanner.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd github-repo-scanner
   \`\`\`

3. Install the dependencies:
   \`\`\`
   npm install
   \`\`\`
   or if you're using yarn:
   \`\`\`
   yarn install
   \`\`\`

4. Set up your environment variables:
   Create a \`.env.local\` file in the root directory and add the following:
   \`\`\`
   GITHUB_ENTERPRISE_TOKEN=your_github_enterprise_token
   \`\`\`

## Usage

1. Start the development server:
   \`\`\`
   npm run dev
   \`\`\`
   or with yarn:
   \`\`\`
   yarn dev
   \`\`\`

2. Open your browser and navigate to \`http://localhost:3000\`

3. Use the UI to configure your scan:
   - Enter your GitHub Enterprise API Token
   - Select the scan type (Enterprise or Other)
   - Set the command-line arguments for the scan

4. Click "Run Scan" to initiate the scanning process

5. View the results in the Scan Results section

## Configuration

### GitHub Enterprise Setup

To use the Enterprise scanning features, you need to set up the following:

1. Obtain a GitHub Enterprise API Token with full scopes for repository and user access.
2. Update the \`xgg_configs.yaml\` file in the \`xgitguard\config\*\` directory with your Enterprise information:

   \`\`\`yaml
   enterprise_api_url: https://github.<<Enterprise_Name>>.com/api/v3/search/code
   enterprise_pre_url: https://github.<<Enterprise_Name>>.com/api/v3/repos/
   url_validator: https://github.<<Enterprise_Name>>.com/api/v3/search/code
   enterprise_commits_url: https://github.<<Enterprise_Name>>.com/api/v3/repos/{user_name}/{repo_name}/commits?path={file_path}
   \`\`\`

## Command-Line Arguments

The scanner supports the following command-line arguments:

- \`-s, --secondary_keywords\`: Secondary keywords (comma-separated)
- \`-e, --extensions\`: File extensions to scan (comma-separated)
- \`-m, --ml_prediction\`: Use ML prediction (Yes/No)
- \`-u, --unmask_secret\`: Unmask secrets in results (Yes/No)
- \`-o, --org\`: Target organization name
- \`-r, --repo\`: Target repository name
- \`-l, --log_level\`: Logging level (10-50)
- \`-c, --console_logging\`: Enable console logging (Yes/No)

## Contributing

Contributions to the GitHub Repo Scanner are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/AmazingFeature\`)
3. Make your changes
4. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
5. Push to the branch (\`git push origin feature/AmazingFeature\`)
6. Open a Pull Request

## License

Distributed under the MIT License. See \`LICENSE\` for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/your-username/github-repo-scanner](https://github.com/your-username/github-repo-scanner)

