import {
  useSuiClientQuery,
} from "@mysten/dapp-kit";
import { Text } from "@radix-ui/themes";
import styles from './input.module.css';

export function Counter({ id }: { id: string }) {
  const { isPending, error } = useSuiClientQuery("getObject", {
    id,
    options: {
      showContent: true,
      showOwner: true,
    },
  });

  if (isPending) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error.message}</Text>;

  // if (!data.data) return <Text>Not found</Text>;


  return (
    <div>
      {/* The rest of your form code */}

      {id && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <h1>NFT created!</h1>
          <h2 className={styles.formTitle}> NFT ID: {id} </h2>
          <a
            href={`https://suiscan.xyz/testnet/object/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007aff', textDecoration: 'underline' }}
          >
            View on SuiScan
          </a>
        </div>
      )}
    </div>
  );
}
