import { defineQuery } from "next-sanity";

export const STARTUP_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
  _id, 
  title,
  slug, 
  _createdAt,
  views, 
  category, 
  author -> {
    _id, name, image, bio
  }, 
  description, 
  image
}`);

export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, 
  title,
  slug, 
  _createdAt,
  views, 
  pitch,
  category, 
  author -> {
    _id, name, slug, image, bio, username
  }, 
  description, 
  image
}`);

export const STARTUP_VIEWS_QUERY = defineQuery(
  `*[_type == "startup" && _id == $id][0]{ _id, views }`
);
