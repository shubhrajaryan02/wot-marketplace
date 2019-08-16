import * as WoT from 'wot-typescript-definitions';
import mongoose, { Schema, Document } from "mongoose";

import { UserType } from "./user";

export interface ProjectType extends Document{
    title: string;
    author: UserType;
    /*updated: Date;
    shortDescription: string;
    longDescription: string;
    github: string;
    projectType: string;
    topic: string[];
    platform: string[];
    tags: string[];
    complexity: string;
    td: WoT.ThingDescription;
    */
}

const ProjectSchema = new Schema({
    title: {
        type: String,
        minlength: 5,
        unique: true,
        required: true,
        trim: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }/*,
    updated: {
        type: Date, 
        default: Date.now 
    },
    shortDescription: {
        type: String,
        minlength: 5,
        maxlength: 180,
        required: true
    },
    longDescription: {
        type: String,
        minlength: 5,
        maxlength: 500,
        required: true
    },
    github: String,
    ProjectType: {
        type: String,
        enum: ["template", "code"],
        required: true
    },
    topic: [{
        type: String, 
        enum: ["sensor", "actuator", "robotics", "lighting", "other"]
    }],
    platform: {
        type: String,
        enum: ["raspberry", "arduino", "ESP", "other"],
        required: true
    },
    tags: [String],
    complexity: {
        type: String,
        enum: ["simple", "medium", "expert"]
    },
    version: {
        type: new Schema({
            instance: String
        })
    },
    td: {
        type: Object,
        required: true
    }*/
});
/*
ProjectSchema.index(
    {
        name: "text",
        shortDescription: "text",
        tags: "text",
        topic: "text"
    },
    {
        weights: {
            name: 4,
            shortDescription: 1,
            tags: 3,
            topic: 1
        },
        name: "TextIndex"
    }
);
*/
export const Project = mongoose.model<ProjectType>("Project", ProjectSchema, "projects");
