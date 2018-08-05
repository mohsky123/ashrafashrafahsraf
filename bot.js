const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
var jimp = require('jimp')
const db = require('quick.db')
const arraySort = require('array-sort'),
      table = require('table');
const translate = require('google-translate-api');
const moment = require('moment');
const ytdl = require('ytdl-core');
const Codes = require('codes-official');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const pretty = require('pretty-ms');
const rn = require('random-number');
let done = {};
const child_process = require("child_process");
const adminprefix = "-";
const devs = ['400943733790605315'];
const shorten = require('isgd');
var prefix = '-';

client.login(process.env.BOT_TOKEN);
