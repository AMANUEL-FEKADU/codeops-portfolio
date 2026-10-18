export const DEMO_USERS = [
  {
    id: "usr_addis_01",
    name: "Almaz",
    phone: "0911000000",
    password: "password123",
    role: "customer",
  },
  {
    id: "usr_kebede_02",
    name: "Kebede",
    phone: "0911222222",
    password: "password123",
    role: "customer",
  },
  {
    id: "usr_staff_01",
    name: "Chef Hanna",
    phone: "0911999999",
    password: "kitchen123",
    role: "staff",
  },
];

export function findUser(phone, password) {
  return (
    DEMO_USERS.find(
      (user) => user.phone === phone && user.password === password,
    ) ?? null
  );
}
