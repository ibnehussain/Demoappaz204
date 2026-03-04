# Application Overview

A high-level reference for the **Demoappaz204** e-commerce web application – its purpose, architecture, key features, and deployment model.

---

## Purpose

Demoappaz204 is a modern e-commerce storefront built for **NTTData / Alta Fiber** customers. It showcases a product catalogue across multiple categories, promotional banners, and a newsletter sign-up – all delivered as a fast, server-rendered web application hosted on Microsoft Azure.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | [.NET 8.0](https://dotnet.microsoft.com/) |
| Web Framework | [ASP.NET Core Razor Pages](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/) |
| UI Components | [Bootstrap 5](https://getbootstrap.com/) |
| Container | [Docker](https://www.docker.com/) (multi-stage build) |
| Cloud Hosting | [Azure App Service](https://azure.microsoft.com/en-us/products/app-service/) |
| Infrastructure as Code | [Bicep](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/) |
| CI/CD | [GitHub Actions](https://docs.github.com/en/actions) |

---

## Application Architecture

Demoappaz204 follows the standard **ASP.NET Core Razor Pages** pattern – each page is a self-contained unit consisting of a `.cshtml` view template and a backing C# `PageModel` class.

```
Browser
  │
  ▼
Azure App Service  (HTTPS)
  │
  ▼
ASP.NET Core Middleware Pipeline
  ├── Static Files  (wwwroot/)
  ├── Routing
  ├── Authorization
  └── Razor Pages Handler
        ├── Index        → Home / product listing
        ├── Privacy      → Privacy policy
        └── Error        → Error handling
```

### Entry Point

`Program.cs` bootstraps the application:

```csharp
builder.Services.AddRazorPages();
// ...
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapRazorPages();
app.Run();
```

### Pages

| Page | Route | Description |
|------|-------|-------------|
| `Index.cshtml` | `/` | Main storefront – hero carousel, categories, featured products, best sellers |
| `Privacy.cshtml` | `/Privacy` | Privacy policy |
| `Error.cshtml` | *(internal)* | Displays error details |

---

## Key Features

### 🛍️ Product Catalogue
- **Categories**: Men's Fashion, Women's Fashion, Electronics, Home & Living
- **Featured Products**: 8 highlighted items with pricing and "Add to Cart" actions
- **Best Sellers**: 4 top-selling products

### 🎠 Hero Carousel
- Auto-rotating banner with 3 promotional slides
- Each slide features a headline, description, and call-to-action button

### 🏷️ Promotional Banners
- Offer banners at the top of the page (NTTData exclusive deals)
- Holiday special section with email newsletter sign-up

### 📦 Product Cards
- Product image (gradient placeholder)
- Title, description, price, and "Add to Cart" button
- Optional badge: **New**, **Sale**, **Hot**, or percentage discount

---

## Infrastructure & Deployment

The Azure infrastructure is defined as code using **Bicep** (`main.bicep`) and parameters (`main.bicepparam`).

### Azure Resources

| Resource | Purpose |
|----------|---------|
| Resource Group | Logical container for all resources |
| App Service Plan | Compute tier (F1 free / B1 basic / S1 standard) |
| Azure Web App | Hosts the ASP.NET Core application |

### Deployment Options

| Method | Script / File | Platform |
|--------|--------------|----------|
| PowerShell | `deploy-to-azure.ps1` | Windows |
| Bash | `deploy-to-azure.sh` | Linux / macOS |
| Bicep | `deploy-bicep.ps1` / `deploy-bicep.sh` | Cross-platform |
| GitHub Actions | `.github/workflows/` | CI/CD (Recommended) |

For detailed deployment instructions see the [Deployment Guide](../../DEPLOYMENT-GUIDE.md) and [Bicep Deployment Guide](../../BICEP-DEPLOYMENT.md).

### Docker

The included `Dockerfile` uses a **multi-stage build**:

1. **Build stage** (`mcr.microsoft.com/dotnet/sdk:8.0`) – restores packages and publishes the application.
2. **Runtime stage** (`mcr.microsoft.com/dotnet/aspnet:8.0`) – copies only the published output, keeping the image small.

```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# ... restore + publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
EXPOSE 80
ENTRYPOINT ["dotnet", "Demoappaz204.dll"]
```

---

## CI/CD Pipeline

The project uses **GitHub Actions** to automate build, test, and deployment:

1. **Trigger**: Push to the main branch or pull request
2. **Build**: `dotnet build --configuration Release`
3. **Publish**: `dotnet publish --configuration Release`
4. **Deploy**: Upload to Azure Web App using the `AZURE_WEBAPP_PUBLISH_PROFILE` secret

---

## Related Documentation

- [Getting Started](./Getting-Started.md) – local setup and development workflow
- [Deployment Guide](../../DEPLOYMENT-GUIDE.md) – step-by-step Azure deployment instructions
- [Security Policy](../../SECURITY.md) – vulnerability reporting and security practices
- [FAQ](../../faq.md) – common questions and answers
