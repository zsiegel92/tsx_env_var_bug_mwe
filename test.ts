async function main() {
  console.log(process.env.ENV_VAR);
}

// npx tsx --env-file .env test.ts
main()
