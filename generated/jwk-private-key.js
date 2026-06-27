// Fake JWK asymmetric PRIVATE keys as JavaScript object literals (scanner test fixtures).
// Unquoted identifier keys; values are random base64url -- structurally valid, NOT real keys.

// RSA private key (2048-bit, RS256) -- double-quoted values
const rsaPrivateJwk = {
  kty: "RSA",
  alg: "RS256",
  use: "sig",
  kid: "js-rsa-1",
  n: "-8OQ92HbJFubTshHWPv2F-kVDBxFinVyNy6H0QaZmexIdAx8E4QK-9_u0j9RxKOpkQR21w2JDmdh2n_DXO8SVS8tF3vuLtgRzWj-chP3SOwSOZ5yIJNDvLIbWsdnEru1FHx8IjSkDq-UEm0i0Iq1LMuqun60NNdF3Su5XZnQ1R73ChZroPqaW1anb9YrYRXlJkW9w_tCMfcP7-H5HpAxlsOBmwVJQCMUpuwCg6bjav5z_79T07PNFSCAyaZZolm3A0zMGROA_UDx7d90f-7wQ68dgE0N1DbZOVuWm4f8z452wCb15GnLxRaxAQKU0M3tgcU5jmF5PMcYTnHH5YxifA",
  e: "AQAB",
  d: "FiUR4OFkANRlBLV5C8vM694_LjqImKQJmb8KpPpVKfI0dxv4JqCiPcKiWT9WdfMUNWY1vnxEZ7tA2ZyvZlhhlpBYsHAi4j4V2CvqFpRyWyI_y3g1D2IpYmoYXf93RpVInSUl_hGwKLG-2vrQSQMk2z8kF64skw3v7LuEe73IXKMtX53pJ8FvXdmxTCTgAJOmgMSBM6PNo9JBqt0hbR0lmCSFjeaLmZwweUDYuAF-4wxE0pqznsH_9jv_1zQkh9axwNkNcqZyneBU0sPr6Lme7doIcvIwm-lau_xfJP0jYpvHXinF8cyDRZ6bghW3et5J52urqpqdycxZT7TD55oGsQ",
  p: "Tsi_iHk5OTJFUOJssR-GMsezbUDrrYqhO4OVVBJ6RdNa9ax7KsFzoRUk9Tw_-HZvFZ3KMTFAgQRCCO0BrYQNNFB53n7vIucnNVISXderJeHD4k4wIV4QUXMClDq28J-EX0N6p3jRpnN-baCiALNy_rvOcBiy8f8RZTWrdl9NBTY",
  q: "SecNl6Y6HFpD8WroqQdoldvELsXq_rLyFdlqxM3Uney17JlaHZIRa4e0mdvK5zshKBwyKWLpK6-xDTqB5sSV6iuZo2ALSxudsf6wsWUP5tpuzJzgdKWjNH7wahuWh9W_Gtac-O_bmSMhuMVlWhjKVnXZZ3NdX-ttCFfGPSdTF2M",
  dp: "wfOaUIK_8S22UGqIKhlxG8frEBxq75LNJ45wuEA1J0OkhthIuYQF0YQNLzSNrDdL5Q1ZuIANnUnCA2UnYrjhfm3h3NCsYqOI3OlQoE8ynIcI3TzCaiyFwhj_BYb8a7CCJ1rpn2SNTn2q1O6hIUXAHqjzfoQPE-LFCgMGK2muHcA",
  dq: "b6UVfUkAkRF0kqkGOpuWAAyLK1UX_NqScaHPBUxzaXEkqMLd-Ii-Bb-xX9NXE9DSLcfPJ9hZD-x3s8Keh8HK15GAAzDkm5rcesRIbjd_PLjqOM0OKMDjhN7SwWSr31bo87kyCmuEBpVYmbWQ2LHp1ybGsyxSoY79I6J1W6jMesE",
  qi: "rPSYnh9oAi3MK73xEAUi5UaxeyUiC3xjI0e6r6GuhuLWoihDqFxVmwsSUSF0__SFei-nLMnHcwx60Nzr3N_J8l42lrEHPLVU33nZurIqfttTUm8RGMaxzvyhoXEc1o3AZO4I8YDbrdUVUg1MpiXPSDLUVTCZpX3nOqa8EysYeZA",
};

// EC private key (P-256, ES256) -- single-quoted values
const ecPrivateJwk = {
  kty: 'EC',
  crv: 'P-256',
  alg: 'ES256',
  use: 'sig',
  kid: 'js-ec-p256-1',
  x: 'FS6eMuv5V3JM0H6YzEXZa3H-I35pCf9krJ_ig8D3Jxk',
  y: 'r-MxxsZKb215h7Vo6G-dJqARsoKZ8eDCbMyvP_hpyaI',
  d: 'yCO5n4ci2-VEqOTKRDxdopwEG-dZTUv7M0BiLTl1MwE',
};

// OKP private key (Ed25519, EdDSA) -- exported
export const ed25519PrivateJwk = {
  kty: "OKP",
  crv: "Ed25519",
  alg: "EdDSA",
  use: "sig",
  kid: "js-ed25519-1",
  x: "gzEiRGjcA9qyaQwYFdfuZY0QzGR0tScSYRJkYg8Eqzs",
  d: "LfVSQ1dgob_r6R9IF-ZDe41oQjePw-Pq7xVXGhODI-s",
};
