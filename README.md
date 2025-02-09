# Template repository for creating a slides deck with reveal.js framework

This repository is a template for creating a new slides deck with [reveal.js](https://revealjs.com/).

## Usage

1. Click the "Use this template" button to create a new repository based on this template.
2. Clone the new repository to your local machine.
3. Edit the `index.html` file to create your slides.
4. Populate following github actions secrets:
    - `AWS_S3_BUCKET`: The name of the S3 bucket where the slides will be deployed.
    - `AWS_DISTRIBUTION`: The CloudFront distribution ID.
    - `AWS_REGION`: The AWS region where the S3 bucket is located.
    - `AWS_ACCESS_KEY_ID`: The AWS access key ID.
    - `AWS_SECRET_ACCESS_KEY`: The AWS secret access key.
5. Push your changes to the repository.
