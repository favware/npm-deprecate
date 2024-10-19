# Changelog

All notable changes to this project will be documented in this file.

# [2.0.0](https://github.com/favware/npm-deprecate/compare/v1.0.7...v2.0.0) - (2024-10-19)

## 🏠 Refactor

- Replace `micromatch` with `picomatch` ([547fddf](https://github.com/favware/npm-deprecate/commit/547fddf77831f61670e0930b6565082b47e96e7e)) ([#284](https://github.com/favware/npm-deprecate/pull/284) by @SukkaW)

## 🐛 Bug Fixes

- Bump minimum required NodeJS version to v18.17.0 to match minimum version of `npm-package-arg` and `npm-registry-fetch` dependencies ([52fd648](https://github.com/favware/npm-deprecate/commit/52fd64897853e81dd63a33fc9dac5c070a1404c0))
  - 💥 **BREAKING CHANGE:** Minimum NodeJS version is now v18.17.0
- **deps:** Update dependency npm-package-arg to v12 ([51fb750](https://github.com/favware/npm-deprecate/commit/51fb750c9cd150e5104c9e6eb20527c56d96d41a)) ([#282](https://github.com/favware/npm-deprecate/pull/282) by @renovate[bot])
- **deps:** Update dependency npm-registry-fetch to v18 ([b30f3e8](https://github.com/favware/npm-deprecate/commit/b30f3e8258d972b2c7497e6f01da77638bbbe85f)) ([#283](https://github.com/favware/npm-deprecate/pull/283) by @renovate[bot])
- **deps:** Update all non-major dependencies ([ebaaf5b](https://github.com/favware/npm-deprecate/commit/ebaaf5bf3101c128521d596965fe09454919db4a)) ([#274](https://github.com/favware/npm-deprecate/pull/274) by @renovate[bot])
- **deps:** Update all non-major dependencies ([3c712e1](https://github.com/favware/npm-deprecate/commit/3c712e11c2bc042f46c0978ac0ab3bb65253488f)) ([#262](https://github.com/favware/npm-deprecate/pull/262) by @renovate[bot])
- **deps:** Update dependency npm-registry-fetch to v17 ([bc26a92](https://github.com/favware/npm-deprecate/commit/bc26a925e9b471363e06664763d97ce51a20dcf3)) ([#258](https://github.com/favware/npm-deprecate/pull/258) by @renovate[bot])
- **deps:** Update dependency commander to v12 ([ee59c6e](https://github.com/favware/npm-deprecate/commit/ee59c6eb31c9ff52c795926bbbef93df683a7837)) ([#237](https://github.com/favware/npm-deprecate/pull/237) by @renovate[bot])
- **deps:** Update all non-major dependencies ([8a30938](https://github.com/favware/npm-deprecate/commit/8a30938335d8dfe0ad1a321fc4ac23d9d52f35e3)) ([#234](https://github.com/favware/npm-deprecate/pull/234) by @renovate[bot])
- **deps:** Update all non-major dependencies ([3c460f5](https://github.com/favware/npm-deprecate/commit/3c460f5ffa7e740855d1ae581a486158111ee3f2)) ([#231](https://github.com/favware/npm-deprecate/pull/231) by @renovate[bot])
- **deps:** Update all non-major dependencies ([94d6a87](https://github.com/favware/npm-deprecate/commit/94d6a87e122b89ff8cd2f67e32ac6ce79f3c35e2)) ([#229](https://github.com/favware/npm-deprecate/pull/229) by @renovate[bot])
- **deps:** Update dependency @sapphire/fetch to v3 ([f108b36](https://github.com/favware/npm-deprecate/commit/f108b36886382236496c5517b7326b5de3233036)) ([#228](https://github.com/favware/npm-deprecate/pull/228) by @renovate[bot])
- **deps:** Update dependency npm-registry-fetch to v16 ([157af70](https://github.com/favware/npm-deprecate/commit/157af706b75da717f53be340aabe3ca5744b038f)) ([#199](https://github.com/favware/npm-deprecate/pull/199) by @renovate[bot])
- **deps:** Update dependency npm-package-arg to v11 ([8a78982](https://github.com/favware/npm-deprecate/commit/8a78982806a85513caaaffecfdfadea7b838ea8a)) ([#198](https://github.com/favware/npm-deprecate/pull/198) by @renovate[bot])
- **deps:** Update dependency npm-registry-fetch to v15 ([409262c](https://github.com/favware/npm-deprecate/commit/409262c73bb355db2793c44226a5347d93da1917)) ([#192](https://github.com/favware/npm-deprecate/pull/192) by @renovate[bot])
- **deps:** Update dependency commander to v11 ([29d5ea8](https://github.com/favware/npm-deprecate/commit/29d5ea8e143121fdbeb4dd4ea5335c8b73a63eed)) ([#178](https://github.com/favware/npm-deprecate/pull/178) by @renovate[bot])
- **deps:** Update dependency commander to v10 ([fc3453d](https://github.com/favware/npm-deprecate/commit/fc3453d99d6d5bcccac470c8d2abd047afeac14d)) ([#149](https://github.com/favware/npm-deprecate/pull/149) by @renovate[bot])

# [1.0.7](https://github.com/favware/npm-deprecate/compare/v1.0.6...v1.0.7) - (2022-12-03)

## 🐛 Bug Fixes

- Fixed parsing of packages provided through CLI ([8fd2c74](https://github.com/favware/npm-deprecate/commit/8fd2c745108f2993e8e2b2d1d2ff0f71cdd89987))

# [1.0.6](https://github.com/favware/npm-deprecate/compare/v1.0.5...v1.0.6) - (2022-11-26)

## 🐛 Bug Fixes

- Fixed parsing of custom messages and other default options ([53a4e02](https://github.com/favware/npm-deprecate/commit/53a4e02f7a327e07fc0ad448c21eff4b63609687))
- **deps:** Update dependency npm-package-arg to v10 (#133) ([ee4c48c](https://github.com/favware/npm-deprecate/commit/ee4c48c9a2b6cc97499acfb410d88206b935ec5b))
- **deps:** Update dependency npm-registry-fetch to v14 (#129) ([367477b](https://github.com/favware/npm-deprecate/commit/367477ba7aca06d19f6d7285b3fc09e0c147e170))
- **deps:** Update dependency @sapphire/utilities to ^3.11.0 (#125) ([4a892bb](https://github.com/favware/npm-deprecate/commit/4a892bb979398e81a43498f86c67782e1134c21e))
- **deps:** Update dependency @sapphire/utilities to ^3.9.3 (#114) ([b64fa24](https://github.com/favware/npm-deprecate/commit/b64fa24f1ddb03822e72c150a72e7c2909e57904))
- **deps:** Update dependency @sapphire/utilities to ^3.9.0 (#105) ([f4b53b5](https://github.com/favware/npm-deprecate/commit/f4b53b5d6b0521eba28180890c9f438ebdbc52aa))

## 🪞 Styling

- Apply new prettier config to all files ([e3367bb](https://github.com/favware/npm-deprecate/commit/e3367bb65adf314e8e32d1242c6aafdc2b692c6b))

### [1.0.5](https://github.com/favware/npm-deprecate/compare/v1.0.4...v1.0.5) (2022-07-30)

### Bug Fixes

-   **deps:** update dependency @sapphire/fetch to ^2.4.0 ([#88](https://github.com/favware/npm-deprecate/issues/88)) ([bde0d5c](https://github.com/favware/npm-deprecate/commit/bde0d5c1f2dd3cc5cb22207986a2a721779591a3))
-   **deps:** update dependency @sapphire/fetch to ^2.4.1 ([#100](https://github.com/favware/npm-deprecate/issues/100)) ([d3007c3](https://github.com/favware/npm-deprecate/commit/d3007c30b2996ccf5b3355758e2c326263188ab4))
-   **deps:** update dependency @sapphire/utilities to ^3.7.0 ([#95](https://github.com/favware/npm-deprecate/issues/95)) ([216d73c](https://github.com/favware/npm-deprecate/commit/216d73cd8a0adc41a277c23f12b1af94d0118167))
-   **deps:** update dependency commander to v9 ([#36](https://github.com/favware/npm-deprecate/issues/36)) ([148d505](https://github.com/favware/npm-deprecate/commit/148d50510895cda2f337dcfa2ddc7d73fe86fcbd))
-   **deps:** update dependency npm-package-arg to v9 ([#41](https://github.com/favware/npm-deprecate/issues/41)) ([b6a4873](https://github.com/favware/npm-deprecate/commit/b6a48733d2cdbada621564f4165815fff40d6a03))
-   **deps:** update dependency npm-registry-fetch to v13 ([4978de6](https://github.com/favware/npm-deprecate/commit/4978de676c36de4efbf00b6b0d2df957fe081d15))
-   update dependecies ([2d7fa22](https://github.com/favware/npm-deprecate/commit/2d7fa223bb6cf02ba11107b295a423d256b97308))

### [1.0.4](https://github.com/favware/npm-deprecate/compare/v1.0.3...v1.0.4) (2021-10-04)

### Bug Fixes

-   bump dependencies to latest versions ([840b905](https://github.com/favware/npm-deprecate/commit/840b905979eb0ce84b659e3dfb73d197dd2ed34e))
-   **deps:** update dependency colorette to ^2.0.13 ([#15](https://github.com/favware/npm-deprecate/issues/15)) ([cc3584e](https://github.com/favware/npm-deprecate/commit/cc3584e7ff44c1f8ade2c8aec8edb03c2dc93f33))

### [1.0.3](https://github.com/favware/npm-deprecate/compare/v1.0.2...v1.0.3) (2021-10-01)

### Bug Fixes

-   **deps:** update dependency colorette to ^1.4.0 ([#9](https://github.com/favware/npm-deprecate/issues/9)) ([eccbbd3](https://github.com/favware/npm-deprecate/commit/eccbbd32f5aa7409323a69f6790559bde1da57b0))
-   **deps:** update dependency commander to ^8.2.0 ([#10](https://github.com/favware/npm-deprecate/issues/10)) ([2349abe](https://github.com/favware/npm-deprecate/commit/2349abec81b7d0793a379155c8ecfd0ffc56adee))
-   **readme:** fixed examples and usages ([f6f3d12](https://github.com/favware/npm-deprecate/commit/f6f3d1242f35e8979dfb2f01841b820dbb531d1c))

### [1.0.2](https://github.com/favware/npm-deprecate/compare/v1.0.1...v1.0.2) (2021-08-24)

### Bug Fixes

-   fixed config file examples and schema ([45fe667](https://github.com/favware/npm-deprecate/commit/45fe66760205c715fa3d2f24b46bb2b3031e06d4))

### [1.0.1](https://github.com/favware/npm-deprecate/compare/v1.0.0...v1.0.1) (2021-08-24)

### Bug Fixes

-   fixed CLI throwing an error when no versions are deprecated ([15134b8](https://github.com/favware/npm-deprecate/commit/15134b8f116219a33898bde89fdcd9d68a1cc85d))

## 1.0.0 (2021-08-24)

### Features

-   hello GitHub 🎉🎉 ([0b2d467](https://github.com/favware/npm-deprecate/commit/0b2d467a35d77c25c3fa2a67d4f0f89e150c73e2))
