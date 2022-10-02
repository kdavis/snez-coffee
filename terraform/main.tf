
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "resource_group" {
  name     = "${var.resource_group_prefix}snezcoffee"
  location = var.az_location
}

resource "azurerm_static_site" "staticwebapp" {
  name                = "${var.static_site_prefix}snezcoffee"
  resource_group_name = azurerm_resource_group.resource_group.name
  location            = azurerm_resource_group.resource_group.location
  sku_tier            = "Free"
  tags = {
    "app"     = var.what
    "managed" = "terraform"
    "url"     = var.url
  }
}


