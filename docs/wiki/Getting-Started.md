# Getting Started

This guide walks you through setting up and running the **Demoappaz204** e-commerce application locally for development and testing.

## Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Minimum Version | Notes |
|------|----------------|-------|
| [.NET SDK](https://dotnet.microsoft.com/download) | 8.0 | `dotnet --version` to verify |
| [Git](https://git-scm.com/) | Any recent version | For cloning the repository |
| [Docker](https://www.docker.com/get-started) *(optional)* | 20.x+ | Required only for container-based runs |
| [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) *(optional)* | 2.x+ | Required only for Azure deployments |

---

## Clone the Repository

```bash
git clone https://github.com/ibnehussain/Demoappaz204.git
cd Demoappaz204
```

---

## Running Locally

### Option 1 – .NET CLI (Recommended for Development)

1. Navigate to the project directory:
   ```bash
   cd Demoappaz204
   ```

2. Restore NuGet packages:
   ```bash
   dotnet restore
   ```

3. Start the development server:
   ```bash
   dotnet run
   ```

4. Open your browser and navigate to:
   ```
   https://localhost:5001
   ```
   or
   ```
   http://localhost:5000
   ```

The application will hot-reload on file changes when running in **Development** mode.

### Option 2 – Docker

1. Build the Docker image from the repository root:
   ```bash
   docker build -t demoappaz204 .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:80 demoappaz204
   ```

3. Open your browser and navigate to `http://localhost:8080`.

---

## Project Structure

```
Demoappaz204/
├── Demoappaz204/               # ASP.NET Core application
│   ├── Pages/                  # Razor Pages (UI)
│   │   ├── Index.cshtml        # Home / store front page
│   │   ├── Privacy.cshtml      # Privacy policy page
│   │   └── Error.cshtml        # Error page
│   ├── wwwroot/                # Static assets (CSS, JS, images)
│   ├── appsettings.json        # Application configuration
│   ├── appsettings.Development.json
│   └── Program.cs              # Application entry point
├── Dockerfile                  # Multi-stage Docker build
├── Demoappaz204.sln            # Visual Studio solution file
├── main.bicep                  # Azure infrastructure (Bicep)
├── deploy-to-azure.sh          # Bash deployment script
├── deploy-to-azure.ps1         # PowerShell deployment script
└── .github/workflows/          # GitHub Actions CI/CD workflows
```

---

## Configuration

Application settings are managed via `appsettings.json` and `appsettings.Development.json`.

### Environment-Specific Settings

| File | Used When |
|------|-----------|
| `appsettings.json` | All environments (base config) |
| `appsettings.Development.json` | `ASPNETCORE_ENVIRONMENT=Development` |

You can override any setting using environment variables or Azure App Service **Application Settings**.

---

## Building for Release

To produce an optimized release build:

```bash
cd Demoappaz204
dotnet publish --configuration Release --output ./publish
```

The compiled output will be placed in the `./publish` directory.

---

## Next Steps

- **Deploy to Azure** – See [Deployment Guide](../../DEPLOYMENT-GUIDE.md) for step-by-step instructions.
- **Understand the application** – See [Application Overview](./Application-Overview.md) for architecture and feature details.
- **Report a security issue** – See [Security Policy](../../SECURITY.md).
