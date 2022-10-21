// Write a program that can calculate the Hamming distance between two DNA strands.

// A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. 
// Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. 
// Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. 
// In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.

// The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.

// By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, 
// we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.

// This is called the Hamming distance.

// The Hamming distance is only defined for sequences of equal length. 
// If you have two sequences of unequal length, you should compute the Hamming distance over the shorter length.

class DNA {
  constructor(strand) {
    this.strand = strand;
  }
  
  hammingDistance(secondStrand) {
    if (this.strand.length === 0 && secondStrand.length === 0) {
      return 0;
    }
    let firstStrand = this.strand.split('');
    secondStrand = secondStrand.split('');
    let shorterLength = Math.min(firstStrand.length, secondStrand.length);
    let count = 0;
    for (let i = 0; i < shorterLength; i += 1) {
      if (firstStrand[i] !== secondStrand[i]) {
        count += 1;
      }
    }
    return count;
  }
}

module.exports = DNA;