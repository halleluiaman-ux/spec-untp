# CI/CD Pipeline Documentation

This directory contains the GitLab CI job definitions for the UNTP specification website.

## Job Trigger Matrix

| Job           | Stage  | Trigger Condition             | Change Paths                                             |
| ------------- | ------ | ----------------------------- | -------------------------------------------------------- |
| `test`        | test   | Merge request + file changes  | `website/**/*`, `.gitlab-ci.yml`, `ci/**/*`, `yarn.lock` |
| `build`       | build  | Push to `main` + file changes | `website/**/*`, `.gitlab-ci.yml`, `ci/**/*`, `yarn.lock` |
| `docs_to_pdf` | build  | Push to `main` + file changes | `website/**/*`, `.gitlab-ci.yml`, `ci/**/*`, `yarn.lock` |
| `pages`       | deploy | Push to `main` + file changes | `website/**/*`, `.gitlab-ci.yml`, `ci/**/*`, `yarn.lock` |

## Job Dependencies

### Merge Request Pipeline

```
test
```

### Main Branch Deploy Pipeline

```
build ───┬───> docs_to_pdf
         │          │
         └──────────┴───> pages
```

- `docs_to_pdf` depends on `build` (needs the built website)
- `pages` depends on both `build` and `docs_to_pdf` (deploys website + PDF)

## Expected Pipeline Behaviour

### Push to `main`

- **With website changes:** All jobs run: `build` -> `docs_to_pdf` -> `pages`
- **Without website changes:** No jobs run

### Merge request

- **With website changes:** Only `test` job runs to validate the build
- **Without website changes:** No jobs run

## File Descriptions

- `build.yml` - Builds the Docusaurus website
- `docs-to-pdf.yml` - Generates PDF from the built website
- `pages.yml` - Deploys to GitLab Pages
- `test.yml` - Validates builds on merge requests
