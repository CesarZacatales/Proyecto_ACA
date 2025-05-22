import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading } from "@medusajs/ui"
import { House } from "@medusajs/icons"

const CustomPage = () => {
  return (
    <Container className="p-4 ">
      <Heading level="h1">Dashboard</Heading>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Dashboard",
  icon: House,
})


export default CustomPage