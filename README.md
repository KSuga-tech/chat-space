# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

## テーブル

|Column|Type|Options|
|------|----|-------|

### Association
- 
- 


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer||
|user_id|integer||

### Association
- belongs_to :user
- blongs_to :group


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||
|mail|string||
|password|string||
|group_id|integer||

### Association
- has_many :messages
- has_many :groups, through :users_groups


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group|string||
|user_id|integer||

### Association
- has_many :messages
- has_many :users, through :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: ture|

### Association
- belongs_to :group 
- belongs_to :user