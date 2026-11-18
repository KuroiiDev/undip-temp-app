import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { tokens } from "../theme/tokens.js";

const { color, space, radius, shadow } = tokens;

const TEAM = [
  { nama: "Maitsam Kadzim", nim: "21120124140161" },
  { nama: "Rafi Nurulhuda", nim: "21120124130053" },
  { nama: "Gotara Parasdya Abimanyu", nim: "21120124140157" },
  { nama: "Faiz Alif Rahmawan", nim: "21120124130063" },
];

function getInitials(name) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function ProfileScreen() {
  return (
    <View style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Card */}
        <View style={styles.headerCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="people" size={28} color={color.primary} />
          </View>
          <Text style={styles.groupTitle}>Kelompok 13</Text>
          <Text style={styles.groupSubtitle}>
            Praktikum Pemrograman Perangkat Bergerak
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Modul 6 • LiveTemp</Text>
          </View>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Anggota Kelompok</Text>
          <View style={styles.countPill}>
            <Text style={styles.countText}>{TEAM.length} Anggota</Text>
          </View>
        </View>

        {/* Member Cards */}
        <View style={styles.memberList}>
          {TEAM.map((member) => (
            <View key={member.nim} style={styles.memberCard}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{getInitials(member.nama)}</Text>
              </View>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.nama}</Text>
                <View style={styles.nimRow}>
                  <Ionicons name="id-card-outline" size={14} color={color.text3} />
                  <Text style={styles.memberNim}>{member.nim}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: color.bg,
  },
  container: {
    padding: space.lg,
    paddingBottom: space.xxl,
    gap: space.lg,
    backgroundColor: color.bg,
  },
  headerCard: {
    backgroundColor: color.surface,
    padding: space.xl,
    borderRadius: radius.card,
    borderCurve: "continuous",
    alignItems: "center",
    borderWidth: 1,
    borderColor: color.border,
    boxShadow: shadow.card,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: color.surface2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: space.sm,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: color.text,
    marginBottom: 4,
  },
  groupSubtitle: {
    fontSize: 13,
    color: color.text2,
    textAlign: "center",
    marginBottom: space.md,
  },
  badge: {
    backgroundColor: color.surface2,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: radius.pill,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: color.primary,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: space.xs,
  },
  sectionTitle: {
    fontSize: tokens.type.section,
    fontWeight: "700",
    color: color.text,
  },
  countPill: {
    backgroundColor: color.surface2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: radius.pill,
  },
  countText: {
    fontSize: 12,
    fontWeight: "600",
    color: color.text2,
  },
  memberList: {
    gap: space.sm,
  },
  memberCard: {
    backgroundColor: color.surface,
    padding: space.md,
    borderRadius: radius.card,
    borderCurve: "continuous",
    flexDirection: "row",
    alignItems: "center",
    gap: space.md,
    borderWidth: 1,
    borderColor: color.border,
    boxShadow: shadow.card,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: color.surface2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: color.border,
  },
  avatarText: {
    fontSize: 14,
    fontWeight: "700",
    color: color.primary,
  },
  memberInfo: {
    flex: 1,
    gap: 3,
  },
  memberName: {
    fontSize: 15,
    fontWeight: "600",
    color: color.text,
  },
  nimRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  memberNim: {
    fontSize: 13,
    color: color.text2,
    fontFamily: "monospace",
  },
});
