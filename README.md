# README

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null :false|
|image|string||
|group_id|integer|foreign_key :true|
|user_id|integer|foreign_key :true|

### Association
- belongs_to :user
- blongs_to :group


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null :false, unique :true|
|mail|string|null :false, unique :true|
|password|string|null :false|
|group_id|integer|foreign_key :true|

### Association
- has_many :messages
- has_many :groups, through :users_groups


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group|string|null :false, unique :true|
|user_id|integer|foreign_key :true|

### Association
- has_many :messages
- has_many :users, through :users_groups


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|

### Association
- belongs_to :group 
- belongs_to :user