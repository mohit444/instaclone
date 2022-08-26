import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation={"vertical"} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentSection post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.postHeaderContainer}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text>{post.user}</Text>
    </View>
    <Text style={{ fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View>
    <Image
      source={{ uri: post.image_url }}
      style={{ width: "100%", height: 450 }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 10,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        width: "32%",
        justifyContent: "space-between",
      }}
    >
      <Icon
        imgstyle={styles.footerIcon}
        imgurl={"https://img.icons8.com/material-outlined/344/like--v1.png"}
      />
      <Icon
        imgstyle={styles.footerIcon}
        imgurl={
          "https://img.icons8.com/fluency-systems-regular/344/speech-bubble--v1.png"
        }
      />
      <Icon
        imgstyle={styles.footerIcon}
        imgurl={
          "https://png.pngitem.com/pimgs/s/391-3913352_paper-plane-instagram-paper-plane-icon-hd-png.png"
        }
      />
    </View>
    <Icon
      imgstyle={styles.footerIcon}
      imgurl={
        "https://cdn.iconscout.com/icon/free/png-256/save-3244517-2701888.png"
      }
    />
  </View>
);

const Icon = ({ imgurl, imgstyle }) => (
  <TouchableOpacity>
    <Image source={{ uri: imgurl }} style={imgstyle} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ marginTop: 5, marginLeft: 10 }}>
    <Text style={{ fontWeight: "600" }}>{post.likes} likes</Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 5 }}>
    <Text style={{ fontWeight: "600" }}>{post.user}</Text>
    <Text> {post.caption}</Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5, marginLeft: 10 }}>
    <TouchableOpacity>
      {!!post.comments.length && (
        <Text style={{ color: "grey" }}>
          view{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
          {post.comments.length > 1 ? "comments" : "comment"}
        </Text>
      )}
    </TouchableOpacity>
  </View>
);

export default Post;

const styles = StyleSheet.create({
  postHeaderContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 6,
  },
  footerIcon: {
    marginTop: 6,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
