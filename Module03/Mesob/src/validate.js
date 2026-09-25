export function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = "We need a name for the delivery"
  }

  const phoneRegex = /^(?:\+251|0)9\d{8}$/
  if (!phoneRegex.test(form.phone.trim())) {
    errors.phone = "Use 09... or +2519... (TeleBirr number)"
  }

  if (!form.area) {
    errors.area = "Please select a delivery area"
  }
  return errors
}