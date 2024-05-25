const appwrite = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  DatabaseID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  CollectionID: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  StorageID: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default appwrite;
