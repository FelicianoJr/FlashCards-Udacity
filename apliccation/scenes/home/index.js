import React from "react";
import { BaseView, TextTitle, TopView } from "../../util/style";
import Button from "../../component/button";
import Icon from "react-native-vector-icons/Entypo";

export default class Home extends React.PureComponent {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <BaseView>
        <TopView>
          <Icon name="documents" size={70} color="#9c27b0" />
          <TextTitle>Jogo da Memória</TextTitle>
        </TopView>
        <Button
          text="Novo Baralho"
          icon="rocket"
          onpress={() => this.props.navigation.navigate("NewDeck")}
        />
        <Button
          text="Meus Baralhos"
          icon="rocket"
          onpress={() => this.props.navigation.navigate("Menu")}
        />
        {/* <Button
          text="card"
          icon="heart"
          onpress={() => this.props.navigation.navigate("MenuCard")}
        /> */}
        <Button
          text="Perguntas"
          icon="linode"
          onpress={() => this.props.navigation.navigate("Register")}
        />
      </BaseView>
    );
  }
}
