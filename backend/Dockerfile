FROM mcr.microsoft.com/dotnet/core/sdk:2.2-alpine AS build-env
WORKDIR /app

COPY . ./
RUN dotnet restore
RUN dotnet publish ./src/Api/Api.csproj -c Release -o out --no-restore


FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-alpine AS runtime
WORKDIR /app
COPY --from=build-env /app/src/Api/out ./
ENTRYPOINT ["dotnet", "Api.dll"]
