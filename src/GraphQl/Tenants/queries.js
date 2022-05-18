import { gql } from "@apollo/client";

export const GET_ALL_TENANTS = gql `
query MyQuery {
    tenants {
      id
      image_url
      kategori
      keterangan
      nama_brand
      area
      logo_url
    }
  }
`;

export const GET_TENANT_BY_ID = gql`
query MyQuery($id: Int!) {
  tenants_by_pk(id: $id) {
    id
    area
    image_url
    kategori
    keterangan
    logo_url
    nama_brand
    tipe
  }
}
`;

export const GET_ASIA_TENANTS = gql`
query MyQuery($_eq: String = "Asia") {
  tenants(where: { area: { _eq: $_eq } }) {
    id
    image_url
    kategori
    keterangan
    nama_brand
    area
    logo_url
  }
}
`;

export const GET_MID_TENANTS = gql`
query MyQuery($_eq: String = "Middle East") {
  tenants(where: { area: { _eq: $_eq } }) {
    id
    image_url
    kategori
    keterangan
    nama_brand
    area
    logo_url
  }
}
`;

export const ADD_TENANT = gql`
mutation MyMutation($object: tenants_insert_input!) {
  insert_tenants_one(object: $object) {
    id
  }
}
`;

export const UPDATE_TENANT_BY_ID = gql`
mutation MyMutation(
  $id: Int!
  $area: String!
  $image_url: String!
  $kategori: String!
  $keterangan: String!
  $logo_url: String!
  $nama_brand: String!
  $tipe: String!
) {
  update_tenants(
    where: { id: { _eq: $id } }
    _set: {
      area: $area
      image_url: $image_url
      kategori: $kategori
      keterangan: $keterangan
      logo_url: $logo_url
      nama_brand: $nama_brand
      tipe: $tipe
      id: $id
    }
  ) {
    returning {
      area
      image_url
      kategori
      keterangan
      logo_url
      nama_brand
      tipe
      id
    }
  }
}
`;