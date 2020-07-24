# README

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null :false, foreign_key :true|
|user_id|integer|null :false, foreign_key :true|

### Association
- belongs_to :user
- belongs_to :group


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null :false, unique :true|
|mail|string|null :false, unique :true|
|password|string|null :false|

### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null :false, unique :true|


### Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|

### Association
- belongs_to :group 
- belongs_to :user