import { FlatList, StyleSheet, View, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  repositoryCard: {
    padding: 10,
    backgroundColor: "white",
    gap: 10,
  },
  repoCountsBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  repoCountItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
  },
  itemCount: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.bold,
  },
  itemLabel: {
    color: theme.colors.textSecondary,
  },
  repoMainInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  repoDescription: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 5,
  },
  language: {
    color: "white",
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 4,
  },
});

interface Respository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

const ItemSeparator = () => <View style={styles.separator} />;

interface RespositoryListItemProps {
  item: Respository;
}

interface CountItemProps {
  label: string;
  count: number;
}

const CountItem = ({ label, count }: CountItemProps) => {
  const formattedCount =
    count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  return (
    <View style={styles.repoCountItem}>
      <Text style={styles.itemCount}>{formattedCount}</Text>
      <Text style={styles.itemLabel}>{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ item }: RespositoryListItemProps) => {
  return (
    <View style={styles.repositoryCard}>
      <View style={styles.repoMainInfo}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.repoDescription}>
          <Text fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.repoCountsBar}>
        <CountItem label="Stars" count={item.stargazersCount} />
        <CountItem label="Forks" count={item.forksCount} />
        <CountItem label="Reviews" count={item.reviewCount} />
        <CountItem label="Rating" count={item.ratingAverage} />
      </View>
    </View>
  );
};

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};

export default RepositoryList;
