// PraticaCompletaScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PraticaCompletaProps {
  xp: number;
  tempo: string; // formato "m:ss", ex: "1:05"
  acuracia: number; // 0 a 100
  onContinuar?: () => void;
}

export default function PraticaCompletaScreen({
  xp,
  tempo,
  acuracia,
  onContinuar,
}: PraticaCompletaProps) {
  return (
    <View style={styles.container}>
      {/* Mascote - substitui pela sua imagem/svg depois */}
      <View style={styles.mascoteWrapper}>
        <Text style={{ fontSize: 60 }}>🐶</Text>
      </View>

      <Text style={styles.titulo}>Prática Completa!</Text>

      <View style={styles.statsRow}>
        <StatCard
          label="XP TOTAL"
          value={xp.toString()}
          icon="⚡"
          color="#2563eb"
        />
        <StatCard
          label="INCRÍVEL"
          value={`${acuracia}%`}
          icon="🎯"
          color="#10b981"
        />
      </View>

      <View style={styles.statsRowCenter}>
        <StatCard
          label="INCRÍVEL"
          value={tempo}
          icon="🕐"
          color="#22d3ee"
        />
      </View>

      <TouchableOpacity style={styles.botaoContinuar} onPress={onContinuar}>
        <Text style={{ fontSize: 20, color: '#1e293b' }}>▶</Text>
      </TouchableOpacity>
    </View>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  color: string;
}

function StatCard({ label, value, icon, color }: StatCardProps) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.cardLabel}>{label}</Text>
      <View style={styles.cardValueBox}>
        <Text style={{ fontSize: 18 }}>{icon}</Text>
        <Text style={styles.cardValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b5563',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  mascoteWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#22d3ee',
    marginBottom: 30,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  statsRowCenter: {
    width: '55%',
    marginBottom: 30,
  },
  card: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
  },
  cardLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 6,
  },
  cardValueBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 6,
  },
  cardValue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoContinuar: {
    marginTop: 'auto',
    marginBottom: 40,
    backgroundColor: '#22d3ee',
    width: '100%',
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});