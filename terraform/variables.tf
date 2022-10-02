variable "az_subscription" {
  type    = string
  default = "3d16f8b4-b878-4dfa-92a7-96fca14e313d"
}

variable "az_location" {
  default     = "westeurope"
  description = "Location"
}

variable "resource_group_prefix" {
  default     = "rg-"
  description = "Prefix resource group"
}

variable "static_site_prefix" {
  default     = "swa-"
  description = "Prefix of a static web app"
}

variable "what" {
  default     = "snezcoffee"
  description = "Application being managed"
}

variable "url" {
  default     = "snez.coffee"
  description = "URL of the web app"
}
