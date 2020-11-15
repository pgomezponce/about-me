import React, { Component } from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Card,
  Divider,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";

import { EvaIconsPack } from "@ui-kitten/eva-icons";

import {
  Dimensions,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import HyperLink from "react-native-hyperlink";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height,
    };
    Dimensions.addEventListener("change", (e) => {
      const { width, height } = e.window;
      this.setState({ width: width, height: height });
    });
  }

  HelloWorld = function () {
    return (
      <Card
        style={{
          height: 300,
          borderRadius: 25,
          width: this.state.width < 800 ? "100%" : 550,
        }}
        header={() => {
          return (
            <View
              style={{
                backgroundColor: "pink",
                height: "15%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text category="h2">Hello world!</Text>
            </View>
          );
        }}
      >
        <View style={{ height: 225, marginBottom: 25 }}>
          <ScrollView style={{ height: 225 }}>
            <Text>
              My name is Pablo Gómez. I'm a multimedia engineer who loves sushi,
              binging tv shows / movies and coding. I am a fun, sympathetic and
              dedicated person. Many people describes me as a{" "}
              <Text style={{ fontWeight: "bold" }}>
                organized person and problem-solver
              </Text>
              .
            </Text>
            <Text>
              I'm a dedicated person when it comes to{" "}
              <Text style={{ fontWeight: "bold" }}>
                User Experience, Code and Data Science
              </Text>
              , as this skill set is related to my approach on facing daily
              situations: guide yourself through data, be kind and emphatic and,
              finally, get through step by step.{" "}
            </Text>
          </ScrollView>
        </View>
      </Card>
    );
  };

  FindMeOn = function (props) {
    return (
      <Card
        style={{
          width: this.state.width < 800 ? "100%" : 550,
          height:
            this.state.width < 800
              ? this.state.width >= 530
                ? 250
                : this.state.width < 370
                ? 550
                : 400
              : 250,
          borderRadius: 25,
        }}
        header={() => {
          return (
            <View
              style={{
                backgroundColor: "pink",
                height: 45,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text category="h2">Find me on...</Text>
            </View>
          );
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              width: 160,
            }}
          >
            <Icon name="map-outline" style={{ width: 100, height: 100 }} />
            <Text>Around Viladecans!</Text>
            <HyperLink linkDefault={true}>
              <Text>
                Or at{" "}
                <Text
                  onPress={() => Linking.openURL("https://www.salleurl.edu")}
                  style={{
                    textDecorationLine: "underline",
                    color: "blue",
                  }}
                >
                  la Salle Campus Barcelona
                </Text>
              </Text>
            </HyperLink>
          </View>

          <View
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              width: 160,
            }}
          >
            <Icon name="github-outline" style={{ width: 100, height: 100 }} />
            <Text>On Github!</Text>
            <Text>
              As a{" "}
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "blue",
                }}
                onPress={() =>
                  Linking.openURL("https://www.github.com/pablogomezponce")
                }
              >
                STEM student
              </Text>
            </Text>
            <Text>
              As a{" "}
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "blue",
                }}
                onPress={() =>
                  Linking.openURL("https://www.github.com/pgomezponce")
                }
              >
                developer
              </Text>
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              width: 160,
            }}
          >
            <Icon name="share-outline" style={{ width: 100, height: 100 }} />
            <Text>
              And social media as{" "}
              <Text
                onPress={() =>
                  Linking.openURL("https://www.instagram.com/pgomezponce")
                }
                style={{
                  textDecorationLine: "underline",
                  color: "blue",
                }}
              >
                Instagram
              </Text>
              ,{" "}
              <Text
                onPress={() =>
                  Linking.openURL("https://www.twitter.com/pablogomezponce")
                }
                style={{
                  textDecorationLine: "underline",
                  color: "blue",
                }}
              >
                Twitter
              </Text>{" "}
              and{" "}
              <Text
                onPress={() =>
                  Linking.openURL("https://www.linkedin.com/in/pablogomezponce")
                }
                style={{
                  textDecorationLine: "underline",
                  color: "blue",
                }}
              >
                LinkedIn
              </Text>
            </Text>
          </View>
        </View>
      </Card>
    );
  };

  ProfilePic = function () {
    return (
      <Layout
        level="2"
        style={{ width: this.state.width < 800 ? "100%" : 550 }}
      >
        <Image
          style={{
            width:
              this.state.width < 770
                ? Math.min(this.state.width - 20, 300)
                : 400,
            height:
              this.state.width < 770
                ? Math.min(this.state.width - 20, 300)
                : 400,
            alignSelf: "center",
            borderRadius: 25,
            backgroundColor: "transparent",
          }}
          resizeMethod="center"
          source={{
            uri:
              "https://media-exp1.licdn.com/dms/image/C5603AQEH1JDCP6hYng/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=rDroD72YtQcnCnjRCI1qlTpZOjpmbSr7ThOCJ5dZVd4",
          }}
        />
        <Card
          style={{
            width:
              this.state.width < 770
                ? Math.min(this.state.width - 20, 300)
                : "100%",
            height: 140,
            borderRadius: 25,
            marginTop: 10,
            alignSelf: "center",
          }}
          header={() => {
            return (
              <View
                style={{
                  height: 40,
                  backgroundColor: "pink",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text category="h2">My name is...</Text>
              </View>
            );
          }}
        >
          <Text
            category="h1"
            style={{ textAlign: "center", alignSelf: "center" }}
          >
            Pablo Gómez!
          </Text>
        </Card>
      </Layout>
    );
  };

  Content = function (props) {
    return (
      <ScrollView
        style={{
          height: this.state.height * 0.75,
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {this.ProfilePic()}
          <View
          style={{
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: "column",
          }}>
            {this.HelloWorld()}
            {this.FindMeOn()}
          </View>
        </View>
      </ScrollView>
    );
  };

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView>
            <StatusBar />
            <Layout
              style={{
                width: "100%",
                backgroundColor: "#EF6969",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text category="h3">Pablo Gómez</Text>
            </Layout>
            <Layout
              style={{
                width: "100%",
                backgroundColor: "#FFAAAA",
                height: 35,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text category="h4">About me</Text>
            </Layout>

            {this.Content()}

            <Layout style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                You may contact me at:{" "}
              </Text>
              <Text
                onPress={() => {
                  Linking.openURL("mailto:pgomezponce@gmail.com");
                }}
                style={{ color: "blue", textDecorationLine: "underline" }}
              >
                pgomezponce@gmail.com
              </Text>
            </Layout>
          </SafeAreaView>
        </ApplicationProvider>
      </>
    );
  }
}
