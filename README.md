# Demoappaz204 - Modern E-Commerce Web Application

[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4)](https://dotnet.microsoft.com/)
[![Azure](https://img.shields.io/badge/Azure-Deployed-0078D4)](https://azure.microsoft.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive e-commerce web application built with ASP.NET Core 8.0 and deployed to Azure using Infrastructure as Code (Bicep). This project showcases best practices for cloud-native web development, automated deployment pipelines, and modern web UI design.

## 🚀 Features

- **Modern E-Commerce Interface**: Responsive design with product showcases, promotional banners, and shopping cart functionality
- **Azure Cloud Deployment**: Fully automated deployment to Azure using Bicep templates
- **CI/CD Ready**: Configured for continuous integration and deployment
- **Application Insights**: Built-in monitoring and telemetry
- **Security**: HTTPS enforcement and HSTS headers
- **Responsive Design**: Mobile-first approach with Bootstrap 5

## 🛠️ Technology Stack

- **Backend**: ASP.NET Core 8.0 with Razor Pages
- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
- **Infrastructure**: Azure Bicep templates
- **Cloud Platform**: Microsoft Azure
- **Monitoring**: Azure Application Insights
- **Containerization**: Docker support

## 📋 Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Git](https://git-scm.com/)
- Azure subscription (for deployment)

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ibnehussain/Demoappaz204.git
   cd Demoappaz204
   ```

2. **Restore dependencies**
   ```bash
   dotnet restore
   ```

3. **Run the application**
   ```bash
   cd Demoappaz204
   dotnet run
   ```

4. **Open your browser** and navigate to `https://localhost:5001` or `http://localhost:5000`

### Docker Development

1. **Build the Docker image**
   ```bash
   docker build -t demoappaz204 .
   ```

2. **Run the container**
   ```bash
   docker run -p 8080:80 demoappaz204
   ```

## ☁️ Azure Deployment

This project includes multiple deployment options for Azure:

### Option 1: Quick Deployment Scripts

#### Windows (PowerShell)
```powershell
.\deploy-to-azure.ps1
```

#### Linux/macOS (Bash)
```bash
chmod +x deploy-to-azure.sh
./deploy-to-azure.sh
```

### Option 2: Manual Bicep Deployment

1. **Login to Azure**
   ```bash
   az login
   ```

2. **Create Resource Group**
   ```bash
   az group create --name rg-demoappaz204-dev --location "East US"
   ```

3. **Deploy Infrastructure**
   ```bash
   az deployment group create \
     --resource-group rg-demoappaz204-dev \
     --template-file main.bicep \
     --parameters main.bicepparam
   ```

4. **Deploy Application Code**
   ```bash
   dotnet publish -c Release
   # Deploy using Azure App Service deployment methods
   ```

For detailed deployment instructions, see [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) and [BICEP-DEPLOYMENT.md](BICEP-DEPLOYMENT.md).

## 🏗️ Project Structure

```
Demoappaz204/
├── Demoappaz204/                 # Main application project
│   ├── Pages/                    # Razor pages
│   │   ├── Index.cshtml         # Home page with e-commerce features
│   │   ├── Privacy.cshtml       # Privacy policy page
│   │   ├── Error.cshtml         # Error handling page
│   │   └── Shared/              # Shared layouts and components
│   ├── wwwroot/                 # Static web assets
│   │   ├── css/                 # Stylesheets
│   │   ├── js/                  # JavaScript files
│   │   └── lib/                 # Third-party libraries
│   ├── Properties/              # Launch settings and configurations
│   ├── Program.cs               # Application entry point
│   └── Demoappaz204.csproj     # Project file
├── main.bicep                   # Azure infrastructure template
├── main.bicepparam             # Bicep parameters file
├── deploy-*.ps1|.sh            # Deployment scripts
├── Dockerfile                   # Container configuration
├── DEPLOYMENT-GUIDE.md          # Deployment instructions
├── BICEP-DEPLOYMENT.md          # Bicep-specific deployment guide
└── README.md                    # This file
```

## ⚙️ Configuration

### Application Settings

The application uses standard ASP.NET Core configuration files:

- `appsettings.json` - Production settings
- `appsettings.Development.json` - Development settings

### Infrastructure Parameters

Key configuration parameters for Azure deployment:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `appName` | demoappaz204 | Base name for Azure resources |
| `environment` | dev | Environment designation (dev/staging/prod) |
| `location` | East US | Azure region for deployment |
| `appServicePlanSku` | F1 | App Service pricing tier |
| `dotnetVersion` | net8.0 | .NET runtime version |

## 🎨 Features Showcase

### E-Commerce Components
- **Hero Carousel**: Rotating promotional banners
- **Product Showcases**: Featured products with pricing
- **Promotional Banners**: Seasonal sales and offers
- **Responsive Design**: Mobile-optimized layout
- **Modern UI**: Clean, professional interface

### Cloud-Native Features
- **Auto-scaling**: Azure App Service automatic scaling
- **Monitoring**: Application Insights integration
- **Security**: HTTPS enforcement and security headers
- **High Availability**: Multi-region deployment support

## 🔧 Development

### Building the Project

```bash
# Clean and restore
dotnet clean && dotnet restore

# Build
dotnet build

# Run tests (if any)
dotnet test

# Publish for production
dotnet publish -c Release -o ./publish
```

### Code Style and Standards

- Follows standard C# naming conventions
- Uses ASP.NET Core best practices
- Implements secure coding practices
- Responsive design principles

## 📊 Monitoring and Observability

The application includes built-in monitoring through:

- **Azure Application Insights**: Performance metrics, request tracing, and error logging
- **Azure Log Analytics**: Centralized logging and analysis
- **Health Checks**: Application health monitoring
- **Custom Telemetry**: Business metrics and user behavior tracking

## 🔒 Security

Security features implemented:

- HTTPS enforcement
- HSTS (HTTP Strict Transport Security)
- Secure headers configuration
- Input validation and sanitization
- Azure-managed certificates

## 🚀 CI/CD Integration

The project is configured for:

- GitHub Actions workflows
- Azure DevOps pipelines
- Docker container builds
- Infrastructure as Code deployment
- Automated testing and validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- 🐛 Issues: [GitHub Issues](https://github.com/ibnehussain/Demoappaz204/issues)
- 📖 Documentation: [Wiki](https://github.com/ibnehussain/Demoappaz204/wiki)

## 🎯 Roadmap

- [ ] Add shopping cart functionality
- [ ] Implement user authentication
- [ ] Add payment integration
- [ ] Implement search functionality
- [ ] Add admin dashboard
- [ ] Mobile app development
- [ ] Microservices architecture migration

## 🙏 Acknowledgments

- **TechM Team** for project collaboration
- **CloudThat** for cloud architecture guidance
- **Microsoft** for Azure platform and .NET framework
- **Bootstrap Team** for responsive design framework

---

**Made with ❤️ by [TechM Team](https://github.com/ibnehussain)**

*Deploy with confidence, scale with ease, monitor with precision.*
