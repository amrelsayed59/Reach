const Main: React.FC<any> = (state, action) => {
  switch (action.type) {
    case 'setLoading':
      return { ...state, loading: action.payload };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default Main;
