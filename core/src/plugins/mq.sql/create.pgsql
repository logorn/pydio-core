CREATE TABLE IF NOT EXISTS ajxp_mq_queues (
  channel_name varchar(255) NOT NULL,
  content text NOT NULL,
  constraint pk primary key(channel_name)
);