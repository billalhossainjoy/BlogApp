import { Client, Databases, ID, Query, Storage } from "appwrite";
import appwrite from "../config/config";

class service {
  client;
  database;
  storage;
  constructor() {
    this.client = new Client()
      .setEndpoint(appwrite.url)
      .setProject(appwrite.projectID);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        appwrite.DatabaseID,
        appwrite.CollectionID,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("post create error");
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        appwrite.DatabaseID,
        appwrite.CollectionID,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("update post error");
    }
  }
  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        appwrite.DatabaseID,
        appwrite.CollectionID,
        slug
      );
    } catch (error) {
      console.log("delete post error");
    }
	}
	async getPost(slug) {
		try {
            return await this.database.getDocument(
                appwrite.DatabaseID,
                appwrite.CollectionID,
                slug
            );
        } catch (error) {
            console.log("get post error");
        }
	}
	async getAllPost(query = [Query.equal("status","active")]) {
		try {
            return await this.database.listDocuments(
                appwrite.DatabaseID,
				appwrite.CollectionID,
				query
            );
        } catch (error) {
            console.log("get all post error");
        }
	}
	async uploadFile(file) {
		try {
            return await this.storage.createFile(appwrite.StorageID,ID.unique(),file)
        } catch (error) {
            console.log("upload file error");
        }
	}
	async deleteFile(fileid) {
		try {
			await this.storage.deleteFile(appwrite.StorageID, fileid)
			return true;
        } catch (error) {
            console.log("delete file error");
        }
	}
	async getFile(fileid) {
		try {
            return await this.storage.getFilePreview(appwrite.StorageID, fileid)
        } catch (error) {
            console.log("get file error");
        }
	}
}

const Service = new service();

export default Service;
