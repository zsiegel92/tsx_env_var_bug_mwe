# Issue Description

The `.env` file looks like this:

```sh
ENV_VAR=right # comment after
# ENV_VAR=wrong
```

Using `npx tsx --env-file .env test.ts`, the commented-out wrong variable is set during execution rather than the correct one. The conditions for this are:
- the correct one has a comment after the line where it's defined
- the wrong one appears below the right one

# Run this MWE

```sh
npm install
npm run start
# or
npx tsx --env-file .env test.ts
```


# Issue Link

This is a MWE for [this GitHub issue on the `tsx` rpo](https://github.com/privatenumber/tsx/issues/662). When that is resolved I'll archive this repo.