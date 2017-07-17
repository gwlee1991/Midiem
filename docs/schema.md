| USERS           |           |                           |
|-----------------|-----------|---------------------------|
| column name     | data type | details                   |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| image_url       | string    |                           |


| POSTS       |           |                       |
|-------------|-----------|-----------------------|
| column name | data type | details               |
| id          | integer   | not null, primary key |
| title       | string    | not null, unique      |
| body        | text      | not null              |
| author_id   | integer   | not null, indexed     |
| image_url   | string    | not null              |
| topic_id    | integer   | not null, indexed     |


| COMMENTS     |           |                       |
|--------------|-----------|-----------------------|
| column name  | data type | details               |
| id           | integer   | not null, primary key |
| author_id    | integer   | not null, indexed     |
| post_id      | integer   | not null, indexed     |
| body         | text      | not null              |


| TOPICS       |           |                       |
|--------------|-----------|-----------------------|
| column name  | data type | details               |
| id           | integer   | not null, primary key |
| title        | string    | not null, indexed     |
