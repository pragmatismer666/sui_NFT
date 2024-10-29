import { Transaction } from "@mysten/sui/transactions";
import { Button, Container } from "@radix-ui/themes";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { useNetworkVariable } from "./networkConfig";
import React, { useState } from 'react';
import styles from './input.module.css';

// import { InputPara } from "./input.tsx";

export function CreateCounter({
  onCreated,
}: {
  onCreated: (id: string) => void;
}) {
  const counterPackageId = useNetworkVariable("counterPackageId");
  const suiClient = useSuiClient();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction({
    execute: async ({ bytes, signature }) =>
      await suiClient.executeTransactionBlock({
        transactionBlock: bytes,
        signature,
        options: {
          // Raw effects are required so the effects can be reported back to the wallet
          showRawEffects: true,
          showEffects: true,
        },
      }),
  });


  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    imageUri: "",
    background: "",
    base: "",
    clothes: "",
    glasses: "",
    neck: "",
    hats: "",
    mouth: "",
    uri: "",
    creator: "",
    project: ""
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically call the API or perform some action with the form data
    console.log(inputs);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Create Counter</h2>

      {/* Image URI */}
      <div>
        <label className={styles.formLabel}>Image URI:</label>
        <input
          className={styles.formInput}
          type="text"
          id="imageUri"
          name="imageUri"
          value={inputs.imageUri}
          onChange={handleChange}
          required
        />
      </div>

      {
        inputs.imageUri !== "" &&
        <div>
          <img className={styles.formImage} src={inputs.imageUri}/>
        </div>
      }

      {/* Name */}
      <div>
        <label className={styles.formLabel}>Name:</label>
        <input
          className={styles.formInput}
          type="text"
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className={styles.formLabel}>Description:</label>
        <input
          className={styles.formInput}
          id="description"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          required
        />
      </div>

      {/* background */}
      <div>
        <label className={styles.formLabel}>Background:</label>
        <input
          className={styles.formInput}
          type="text"
          id="background"
          name="background"
          value={inputs.background}
          onChange={handleChange}
          required
        />
      </div>

      {/* base */}
      <div>
        <label className={styles.formLabel}>Base:</label>
        <input
          className={styles.formInput}
          id="base"
          name="base"
          value={inputs.base}
          onChange={handleChange}
          required
        />
      </div>

      {/* clothes */}
      <div>
        <label className={styles.formLabel}>Clothes:</label>
        <input
          className={styles.formInput}
          type="text"
          id="clothes"
          name="clothes"
          value={inputs.clothes}
          onChange={handleChange}
          required
        />
      </div>

      {/* glasses */}
      <div>
        <label className={styles.formLabel}>Glasses:</label>
        <input
          className={styles.formInput}
          type="text"
          id="glasses"
          name="glasses"
          value={inputs.glasses}
          onChange={handleChange}
          required
        />
      </div>

      {/* neck */}
      <div>
        <label className={styles.formLabel}>Neck:</label>
        <input
          className={styles.formInput}
          type="text"
          id="neck"
          name="neck"
          value={inputs.neck}
          onChange={handleChange}
          required
        />
      </div>

      {/* hats */}
      <div>
        <label className={styles.formLabel}>Hats:</label>
        <input
          className={styles.formInput}
          type="text"
          id="hats"
          name="hats"
          value={inputs.hats}
          onChange={handleChange}
          required
        />
      </div>

      {/* mouth */}
      <div>
        <label className={styles.formLabel}>Mouth:</label>
        <input
          className={styles.formInput}
          type="text"
          id="mouth"
          name="mouth"
          value={inputs.mouth}
          onChange={handleChange}
          required
        />
      </div>

      {/* uri */}
      <div>
        <label className={styles.formLabel}>Url:</label>
        <input
          className={styles.formInput}
          type="text"
          id="uri"
          name="uri"
          value={inputs.uri}
          onChange={handleChange}
          required
        />
      </div>

      {/* creator */}
      <div>
        <label className={styles.formLabel}>Creator:</label>
        <input
          className={styles.formInput}
          type="text"
          id="creator"
          name="creator"
          value={inputs.creator}
          onChange={handleChange}
          required
        />
      </div>

      {/* project */}
      <div>
        <label className={styles.formLabel}>Project:</label>
        <input
          className={styles.formInput}
          type="text"
          id="project"
          name="project"
          value={inputs.project}
          onChange={handleChange}
          required
        />
      </div>

      <Container>
        <Button
          size="3"
          className={styles.formButton}
          onClick={() => {
            create();
          }}
        >
          Create Counter
        </Button>
      </Container>

      {/* <button type="submit">Create Counter</button> */}
    </form>
  );


  // return (
  //   <Container>
  //     <Button
  //       size="3"
  //       onClick={() => {
  //         create();
  //       }}
  //     >
  //       Create Counter
  //     </Button>
  //   </Container>
  // );

  function create() {
    const tx = new Transaction();

    tx.moveCall({
      arguments: [
        tx.pure.string(inputs.name),
        tx.pure.string(inputs.description),
        tx.pure.string(inputs.imageUri),
        tx.pure.string(inputs.background),
        tx.pure.string(inputs.base),
        tx.pure.string(inputs.clothes),
        tx.pure.string(inputs.glasses),
        tx.pure.string(inputs.neck),
        tx.pure.string(inputs.hats),
        tx.pure.string(inputs.mouth),
        tx.pure.string(inputs.uri),
        tx.pure.string(inputs.creator),
        tx.pure.string(inputs.project)
      ],
      target: `${counterPackageId}::clue_nft::mint_to_sender`,
    });

    signAndExecute(
      {
        transaction: tx,
      },
      {
        onSuccess: (result) => {
          const objectId = result.effects?.created?.[0]?.reference?.objectId;
          if (objectId) {
            onCreated(objectId);
            console.log("Created Object ID :", objectId);
          }
        },
      },
    );
  }
}
