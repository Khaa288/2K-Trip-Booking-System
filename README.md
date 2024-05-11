# TKPM-PROJECT
**Prerequisite**
- NodeJS and NPM are installed if not install [here](https://nodejs.org/en/download)
- .NET SDK 7.0 is installed if not install [here](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks) 
- Entity Framework Core Tool is installed if not install [here](https://learn.microsoft.com/en-us/ef/core/cli/dotnet)
- Registered MapTiler account and API KEY if not create account and get free API KEY [here](https://cloud.maptiler.com/auth/widget?next=https://cloud.maptiler.com/maps/)

## Configuring
**API**

- Open tkpm-API folder in cmd and type `dotnet ef database update` to create new SQL Server Database Instance of 2K Application.
- **Alternative**: enter appsettings.json in "/tkpm-API/tkpm-API/appsettings.json" directory to change SQL server connection string. Default connection string is SQL Server localDB server.

**UI**

- Open tkpm-UI folder in cmd and type `npm i` to install all application required library
- Create new .env file in tkpm-UI folder with following format:
```
VITE_API_URL = "YOUR_API_URL_HERE"
VITE_MAPTILER_API_KEY = "YOUR_MAPTILER_API_KEY_HERE"
```

## Execute the program
- API: run API project in Visual Studio 2022 or via typing `dotnet watch run` in cmd.
- UI: run UI project via typing `npm run dev` in cmd.
