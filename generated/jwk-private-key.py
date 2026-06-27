# Fake JWK asymmetric PRIVATE keys as Python dict literals (scanner test fixtures).
# Values are random base64url -- structurally valid, NOT real keys.

# RSA private key (2048-bit, RS256)
rsa_private_jwk = {
    "kty": "RSA",
    "alg": "RS256",
    "use": "sig",
    "kid": "py-rsa-1",
    "n": "XS2wpKWFG16kUvFI4Sa6JQ7y0WeH8CuAcfxu1UD0s-Szc-8Xn9uZ9F6zRg0BAuVsDAMQWJQKec9IU9gNAuKdc9E8EzrViOb7Vfq4V3zkNyC09gXKi_yAPOMtuYhSN9GFcBtc67wPEnDg1l2Wigo1Nmp9ZpN9dzTsvr5koaQRa11P2QF_DAHAVzmeop9hMTmZBupPct28S3sIwuzTkWe2nPpa6cblBoeNAMocoOG94gWGLJgCQ-Ls8QmQaiyT1D_7wcTvNrXaUsWt_lJp2xkdKHTLHW4AYdMqsJkh1si63Gm_HXgUrQMuDqDuoZx9wXj0gOxv765Oi38Ai9QXHKKIJQ",
    "e": "AQAB",
    "d": "07bHn5gGni9SwR221XkTaoZnt9B2nNoWBsAq5FOjSCLMh_PZ8v51hn9pGOQ74JTbZ-KAR4SNjTneN0OOnit84bRUrpVMBVR9GXe_10gvQoGNk0xhhpKDtJgDKtl4_VmV2XsQ9bmx_TNe3uk9ANfN4MO35iit5d0x0QRxW1y3dLAv8nNjGlo58bRAzfjPoavEoR_maGm10lBcz1zU3c_zzg0tTfygITikVJSAEv7orNb8-fpXNfqSlYw3JsYweaME8vDcIb2KL3iqlEi6CPeqzbEu40pXINOmW1yJ6SJAKsvsU9ztx6GCTii8xy8-ILI41OUOjYlKN6mIVIrymK7Rng",
    "p": "e2q7d7Pcm4fpDsn3aCT3ruOTDR-dmYcxSqjfvj8qqb2-BaZ24p4ZTPAPHLt47RRzwBQnAOXLVEVKDfq4kAaATbBIekovuxytwIriTjFx9GOrwvB9Zt5rD1pxA_0d5kqmtlL9A7TR5Vfz15E8o2AE1U9fcoHwZDW9u4CfpsypFoM",
    "q": "1w7Sscff23jfW-orfsH1Qmxa6S4BE2QtR2a7eOqf9CtsAJaPGbC56P9fFSUpQcEs5elPhDGVbY2TLM8o5Nb09tJpGC1RUdwVkWcfJpoKjlifCSYtPKAUGcMyS6GRK6s49aOoPmWy5NVMkmc4WGbmIGQ2BarC-tT503jqr-h8E_w",
    "dp": "_X4Qlj-UoQv-9945v9x5WRmMqqSvx60isEfXofNwjvTTy1MY_JQzpBU3sKeg7Q5hq5nR832GlCd1dsROydzDfNKACVtfulbivJFmFco8sj62p8P5sm0UuG5LLyxyqO38juQ_TsChjH4sulh2YBSKcmuOP_JYntB0salicdCB9fE",
    "dq": "EUNASCkFF7DShPAZtKNY55SKBnX1nikrQ0Cy95WYqsxMTK2oVwItLtHUqwmkXD3rYdqjX2zE7FmsgwK_LUYtmbjNG0VzLJXDzpToJ6oMwWKf0SQfrwtrOW4h3qxebjkZTdbfXH-3jzCIBDhs7lQL5FlN3YZ75nYtM52kzPlxiX0",
    "qi": "JCbmyU13xvmTt0CziXwcqiXCAJEhU5JbaWmZ08WPH2EH92MbI0VswvY6hfeJ-ff54vyDYNTfkX215vjr8JXuSZXkedu3YiCRO01wVKEqCgkilBd8uPViW-8SaX66tgqpYDHefbw8nc5E_mwKZWMaADbjCSXr9dkQaAQIxQR2238",
}

# EC private key (P-384, ES384) -- single-quoted keys variant
ec_private_jwk = {
    'kty': 'EC',
    'crv': 'P-384',
    'alg': 'ES384',
    'use': 'sig',
    'kid': 'py-ec-p384-1',
    'x': 'pTQRmCD07EcJkblikH4dIZfX8HE2MstW8Kx4Qxo3KkF130-H38wOxPpqVaY_3Fia',
    'y': 'reuSoRxKsdvUMmC5qk7wUQuXYpnIsyt_sPMlDSiD6eJrNgVHgvqHdbezbqbO5kOe',
    'd': 'YAArJRpBFcXE5SbyI26l1I446XD4C2mBPxdZ1KmE--wOnPvaX6zY9w5ostujZcIp',
}

# OKP private key (X25519, ECDH-ES)
x25519_private_jwk = {
    "kty": "OKP",
    "crv": "X25519",
    "alg": "ECDH-ES",
    "use": "enc",
    "kid": "py-x25519-1",
    "x": "THad4sMGg30ULIahbjfzYBpyE1ZYmpiJ0ugVgzrkLsE",
    "d": "RkwLy-tweedRFjjgWkJ7CkTrrCaDQZ1XkgDQEW_Bnbg",
}
