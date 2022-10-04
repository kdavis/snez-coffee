output "swa_api_key" {
  value = azurerm_static_site.staticwebapp.api_key
}

output "swa_host" {
  value = azurerm_static_site.staticwebapp.default_host_name
}
