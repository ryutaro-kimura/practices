using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Tobasu : MonoBehaviour
{
    public GameObject ball;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void TobasuButton()
    {
        Vector3 pos = ball.transform.position;
        pos.y += 5;
        ball.transform.position = pos;
    }
}
